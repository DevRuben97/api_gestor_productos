import { Request, Response } from "express";
import {getConnection} from 'typeorm';
import User from '../Models/User';
import ModelResponse from '../Helpers/ModelResponse';

export async function Login(Req: Request, Res: Response){

    try{
        const repo= getConnection().getRepository(User);
        let user= await repo.createQueryBuilder()
        .where('User.Email= :Email', {Email: Req.body.Email})
        .getOne();

        if (user=== undefined){
            Res.json(new ModelResponse(false, "El Usuario o la contraseña con incorrectos", null))
        }
        else{
            if (user.Email=== Req.body.Email && user.Password=== Req.body.Password){
                Res.json(new ModelResponse(true, "Bienvenido.", {UserName: `${user.Name} ${user.SurName}`, Id: user.Id}))
            }
            else{
                Res.json(new ModelResponse(false, "El Usuario o la contraseña con incorrectos", null))
            }
        }

    }
    catch(error){
        console.log(error);
        Res.json(new ModelResponse(false, "An unexpected error has occurred.", null));
    }
}

export async function UserProfile(Req: Request, Res: Response){
    try{
        const repo= getConnection().getRepository(User);
        let user= await repo.findOne(Req.params.id);
        if (user){
            return Res.json(new ModelResponse(true, 'Operación exitosa', user))
        }
        else{
            return Res.json(new ModelResponse(false, 'Los datos suministrados son invalidos.', null))
        }
    }
    catch{
        return Res.json(new ModelResponse(false, 'Ha ocurrido un error inesperado', null))
    }
}