import {Request,Response} from 'express';
import {getConnection, getRepository} from 'typeorm';
import Product from '../Models/Product';
import ModelResponse from '../Helpers/ModelResponse';


export async function ProductList(Req: Request, Res: Response){

    try{
        const repo= getConnection().getRepository(Product);
        var ListOfProducts= await repo.find();

        Res.json(new ModelResponse(true, "Operation Success", ListOfProducts));

    }
    catch(error){
        console.log(error);
        Res.json(new ModelResponse(false, "An unexpected error has occurred.", null));
    }

    

}
export async function FindById(Req: Request, Res: Response){
    try{
        const repo= getConnection().getRepository(Product);
        var ListOfProducts= await repo.findOne(Req.params.id)

        Res.json(new ModelResponse(true, "Operation Success", ListOfProducts));

    }
    catch(error){
        console.log(error);
        Res.json(new ModelResponse(false, "An unexpected error has occurred.", null));
    }
}

export async function CreateProduct(Req: Request, Res: Response){
    try {
        
        const repo= getConnection().getRepository(Product);
       const product= await repo.create(Req.body);
        const results= await repo.save(product);
        if (results!== undefined){
            Res.json(new ModelResponse(true, "Operation Susccess", results));
        }
        else{
            Res.json(new ModelResponse(false, "Ha ocurrido un error en el procesamiento de la solicitud", results));
        }

    } catch (error) {
        console.log(error);
        Res.json(new ModelResponse(false, "An unexpected error has occurred.", error));
    }

}

export async function DeleteProduct(Req: Request, Res: Response){

    try {
        const repo= getConnection().getRepository(Product);
    const results= await repo.delete(Req.params.id);

    if (results.affected!== null || results.affected!== undefined){
        Res.json(new ModelResponse(true, "Operation Susccess", null));   
    }
    else{
        Res.json(new ModelResponse(false, "Ha ocurrido un error en el procesamiento de la solicitud", null));
    }
    } catch (error) {
        console.log(error);
        Res.json(new ModelResponse(false, "An unexpected error has occurred.", error));
    }

}