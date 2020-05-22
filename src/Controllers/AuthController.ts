import { Request, Response } from "express";
import {getConnection} from 'typeorm';
import User from '../Models/User';
import ModelResponse from '../Helpers/Response/ModelResponse';
import UserProfile from "../Models/DTOs/UserProfile";

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

export async function GetUserProfile(Req: Request, Res: Response): Promise<Response>{
    try{
        const repo= getConnection().getRepository(User);
        let user= await repo.findOne(Req.params.id);
        if (user){
            const profile= new UserProfile();
            profile.FullName= `${user.Name} ${user.SurName}`;
            profile.Email= user.Email;
            profile.Identification= user.Identification;
            profile.Phone= user.PhoneNumber;
            return Res.json(new ModelResponse(true, 'Operación exitosa', profile))
        }
        else{
            return Res.json(new ModelResponse(false, 'Los datos suministrados son invalidos.', null))
        }
    }
    catch{
        return Res.json(new ModelResponse(false, 'Ha ocurrido un error inesperado', null))
    }
}