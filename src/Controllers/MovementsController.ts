import { Request, Response } from "express";
import {getConnection} from 'typeorm';

import Movement from "../Models/Movement";
import ApplicationCode from '../Models/ApplicationCode';
import EntityValue from '../Models/DTOs/Common/EntityValue';
import ModelResponse from "../Helpers/Response/ModelResponse";
import MovementDetails from "../Models/MovementDetails";
import { getToday } from "../Helpers/Date";

//Maping:
import mapper from '../Helpers/MapperSchemas/Profile';
import MovementDto from "../Models/DTOs/MovementDto";
import MovementDetailsDto from "../Models/DTOs/MovementDetailsDto";

export async function MovementsList(req: Request, res: Response): Promise<Response>{

    try{
        const repo= getConnection().getRepository(Movement);
        let list= await repo.find({
            relations: ['User']
        })
        list.sort((a,b)=> b.Id- a.Id);

        const listDto: MovementDto[] = mapper.map(MovementDto, list);
        

       return res.json(new ModelResponse(true, "Operación Exitosa", listDto));
    }
    catch(error){
        console.log(error);
       return res.json(new ModelResponse(false, "Ha ocurrido un error inesperado", error));
    }
}

export async function getMovementTypes(req: Request, res: Response): Promise<Response>{
    try{
        const repo= getConnection().getRepository(ApplicationCode);
        const values= await repo.createQueryBuilder()
        .where("ApplicationCode.CodeId like 'MT0%'")
        .getMany();

        let selectValues= new Array<EntityValue>();

        values.map((item)=> {
            selectValues.push(new EntityValue(item.CodeId, item.Description))
        });
       return res.json(new ModelResponse(true,"", selectValues));

    }
    catch(exeption){
        console.log(exeption);
       return res.json(new ModelResponse(false, "Ha ocurrido un error inesperado", exeption))
    }
}

export async function NewMovement(req: Request, res: Response): Promise<Response>{
    try{
        const movementRepo= getConnection().getRepository(Movement);
        const detailsRepo= getConnection().getRepository(MovementDetails);
        let movement: Movement= req.body;
        movement= movementRepo.create(movement);
        movement.User_id= 1;
        movement.CreatedDate= getToday()
        const result= await movementRepo.insert(movement);

        movement.Details.forEach(detail=> {
            detail.Movement_id= movement.Id
            detail.CreatedDate= getToday();
            detailsRepo.insert(detail);
        });

        if (result!== undefined){
            return res.json(new ModelResponse(true, "El Movimiento fue registrado correctamente", null));
        }
        else{
            return res.json(new ModelResponse(false, "Ha ocurrido un error inesperado en el prcesamiento de su solicitud", null))
        }
    }
    catch(err){
        console.log(err);
        return res.json(new ModelResponse(false, "Ha ocurrido un error inesperado", err))
    }
}

export async function editMovement(req: Request, res: Response): Promise<Response>{
    try{
        const movementRepo= getConnection().getRepository(Movement);
        const detailsRepo= getConnection().getRepository(MovementDetails);
        const movement: Movement= movementRepo.merge(req.body);
        const result= await movementRepo.update(movement.Id, movement);

        //Update the details:
        const actualDetails= await detailsRepo.createQueryBuilder()
        .select()
        .where("MovementDetails.Movement_Id== :Id", {Id: movement.Id})
        .getMany();
        //Delete the actual:
        actualDetails.forEach(s=> detailsRepo.delete(s));

        //Add the news:
        movement.Details.forEach(detail=> {
            detail.Movement_id= movement.Id
            detail.CreatedDate= getToday();
            detail.ModificationDate= getToday();
            detailsRepo.insert(detail);
        });

        if (result!== undefined){
            return res.json(new ModelResponse(true, "Cambios realizados satisfacoriamente", null));
        }
        else{
            return res.json(new ModelResponse(false, "Ha ocurrido un error inesperado en el prcesamiento de su solicitud", null))
        }
    }
    catch(err){
        console.log(err);
        return res.json(new ModelResponse(false, "Ha ocurrido un error inesperado", err));
    }
}

export async function getMovementById(req: Request, res: Response): Promise<Response>{
    try{
        const repo = getConnection().getRepository(Movement);
        const movement= await repo.findOneOrFail(req.params.id, {
            relations: ['Details', 'Details.Product','User']
        });
        const Mdto: MovementDto= mapper.map(MovementDto,movement);
        Mdto.Details= mapper.map(MovementDetailsDto, movement.Details);

        return res.json(new ModelResponse(true, "", Mdto));
    }
    catch(err){
        console.log(err);
        return res.json(new ModelResponse(false, "Ha ocurrido un error inesperado", err));
    }
}