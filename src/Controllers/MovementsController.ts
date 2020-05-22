import { Request, Response } from "express";
import {getConnection} from 'typeorm';

import Movement from "../Models/Movement";
import ApplicationCode from '../Models/ApplicationCode';
import EntityValue from '../Models/DTOs/Common/EntityValue';
import ModelResponse from "../Helpers/Response/ModelResponse";



export async function MovementsList(req: Request, res: Response): Promise<Response>{

    try{
        const repo= getConnection().getRepository(Movement);
        let list= await repo.find();
        list.sort((a,b)=> b.Id- a.Id);
        

       return res.json(new ModelResponse(true, "Operación Exitosa", list));
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