import {Request,Response} from 'express';
import {getConnection} from 'typeorm';
import Product from '../Models/Product';
import ModelResponse from '../Helpers/ModelResponse';


export async function ProductList(Req: Request, Res: Response){

    try{
        const repo= getConnection().getRepository(Product);
        var ListOfProducts= await repo.find();
        ListOfProducts= ListOfProducts.sort((a,b)=>  b.Id- a.Id);

        Res.json(new ModelResponse(true, "Operation Success", ListOfProducts));

    }
    catch(error){
        console.log(error);
        Res.json(new ModelResponse(false, "An unexpected error has occurred.", []));
    }

    

}
export async function FindById(Req: Request, Res: Response){
    try{
        const repo= getConnection().getRepository(Product);
        const product= await repo.findOne(Req.params.id)

        Res.json(new ModelResponse(true, "Operation Success", product));

    }
    catch(error){
        console.log(error);
        Res.json(new ModelResponse(false, "An unexpected error has occurred.", []));
    }
}

export async function CreateProduct(Req: Request, Res: Response){
    try {
        
        const repo= getConnection().getRepository(Product);
        Req.body.State= 1;
       const product= await repo.create(Req.body);
        const results= await repo.save(product);
        if (results!== undefined){
            Res.json(new ModelResponse(true, "Operation Susccess", {EntityId: Req.body.Id}));
        }
        else{
            Res.json(new ModelResponse(false, "An error occurred in the processing of the request", {EntityId: Req.body.Id}));
        }

    } catch (error) {
        console.log(error);
        Res.json(new ModelResponse(false, "An unexpected error has occurred.", error));
    }

}
export async function EditProduct(Req: Request, Res: Response){
    try {
        
        const repo= getConnection().getRepository(Product);
       const product= await repo.merge(Req.body);
        const results= await repo.save(product);
        if (results!== undefined){
            Res.json(new ModelResponse(true, "Operation Susccess", {EntityId: results.Id}));
        }
        else{
            Res.json(new ModelResponse(false, "Ha ocurrido un error en el procesamiento de la solicitud",{EntityId: Req.body.Id}));
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
        Res.json(new ModelResponse(true, "Operation Susccess", {affected: results.affected}));   
    }
    else{
        Res.json(new ModelResponse(false, "Ha ocurrido un error en el procesamiento de la solicitud", {affected: 0}));
    }
    } catch (error) {
        console.log(error);
        Res.json(new ModelResponse(false, "An unexpected error has occurred.", error));
    }

}