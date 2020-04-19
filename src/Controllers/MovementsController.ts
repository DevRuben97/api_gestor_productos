import { Request, Response } from "express";
import {getConnection} from 'typeorm';
import Movement from "../Models/Movement";
import ModelResponse from "../Helpers/ModelResponse";



export async function MovementsList(req: Request, res: Response){

    try{
        const repo= getConnection().getRepository(Movement);
        let list= await repo.find();
        list.sort((a,b)=> b.Id- a.Id);
        

        res.json(new ModelResponse(true, "Operación Exitosa", list));
    }
    catch(error){
        console.log(error);
        res.json(new ModelResponse(false, "Ha ocurrido un error inesperado", error));
    }
}