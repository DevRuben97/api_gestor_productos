import { Request, Response } from 'express';
import { getConnection } from 'typeorm';
import numeral from 'numeral';

import Product from '../Models/Product';

import EntityValue from '../Models/DTOs/Common/EntityValue';

import ModelResponse from '../Helpers/Response/ModelResponse';



export async function ProductList(Req: Request, Res: Response): Promise<Response> {

    try {
        const repo = getConnection().getRepository(Product);
        var ListOfProducts = await repo.find();
        ListOfProducts = ListOfProducts.sort((a, b) => b.Id - a.Id);

        return Res.json(new ModelResponse(true, "Operation Success", ListOfProducts));

    }
    catch (error) {
        console.log(error);
        return Res.json(new ModelResponse(false, "An unexpected error has occurred.", []));
    }



}
export async function FindById(Req: Request, Res: Response): Promise<Response> {
    try {
        const repo = getConnection().getRepository(Product);
        const product = await repo.findOne(Req.params.id)

        return Res.json(new ModelResponse(true, "Operation Success", product));

    }
    catch (error) {
        console.log(error);
        return Res.json(new ModelResponse(false, "An unexpected error has occurred.", []));
    }
}

export async function CreateProduct(Req: Request, Res: Response): Promise<Response> {
    try {

        const repo = getConnection().getRepository(Product);
        Req.body.State = 1;
        const product = await repo.create(Req.body);
        const results = await repo.save(product);
        if (results !== undefined) {
            return Res.json(new ModelResponse(true, "Operation Susccess", { EntityId: Req.body.Id }));
        }
        else {
            return Res.json(new ModelResponse(false, "An error occurred in the processing of the request", { EntityId: Req.body.Id }));
        }

    } catch (error) {
        console.log(error);
        return Res.json(new ModelResponse(false, "An unexpected error has occurred.", error));
    }

}
export async function EditProduct(Req: Request, Res: Response): Promise<Response> {
    try {

        const repo = getConnection().getRepository(Product);
        const product = await repo.merge(Req.body);
        const results = await repo.save(product);
        if (results !== undefined) {
            return Res.json(new ModelResponse(true, "Operation Susccess", { EntityId: results.Id }));
        }
        else {
            return Res.json(new ModelResponse(false, "Ha ocurrido un error en el procesamiento de la solicitud", { EntityId: Req.body.Id }));
        }

    } catch (error) {
        console.log(error);
        return Res.json(new ModelResponse(false, "An unexpected error has occurred.", error));
    }
}
export async function DeleteProduct(Req: Request, Res: Response): Promise<Response> {

    try {
        const repo = getConnection().getRepository(Product);
        const results = await repo.delete(Req.params.id);

        if (results.affected !== null || results.affected !== undefined) {
            return Res.json(new ModelResponse(true, "Operation Susccess", { affected: results.affected }));
        }
        else {
            return Res.json(new ModelResponse(false, "Ha ocurrido un error en el procesamiento de la solicitud", { affected: 0 }));
        }
    } catch (error) {
        console.log(error);
        return Res.json(new ModelResponse(false, "An unexpected error has occurred.", error));
    }

}

export async function products_select(Req: Request, Res: Response) {
    try {
        const repo = getConnection().getRepository(Product);
        var ListProducts = await repo.createQueryBuilder()
            .select()
            .getMany();
        ListProducts = ListProducts.sort((a, b) => b.Id - a.Id);
        let values = new Array<EntityValue>();


        ListProducts.map((item) => {
            values.push(new EntityValue(item.Id, item.Name))
        })

        Res.json(new ModelResponse(true, "", values));
    }
    catch (error) {
        console.log(error);
        Res.json(new ModelResponse(false, "An unexpected error has occurred.", error))
    }
}

export async function total_products(Req: Request, Res: Response): Promise<Response>{


    try{
        const repo= getConnection().getRepository(Product);
        const products= await repo.find({
            select: ["Id"]
        });

        return Res.json(new ModelResponse(true, "", products.length))
    }
    catch(err){
        console.log(err);
        return Res.json(new ModelResponse(true, "Ha ocurrido un error inesperado", null))
    }
}

export async function total_warehouse(Req: Request, Res: Response): Promise<Response>{


    try{
        const repo= getConnection().getRepository(Product);
        const products= await repo.find({
            select: ["Price"]
        });

        let total= 0;
        products.forEach(s=> {
            total+= numeral(s.Price).value();
        })

        return Res.json(new ModelResponse(true, "", total));
    }
    catch(err){
        console.log(err);
        return Res.json(new ModelResponse(true, "Ha ocurrido un error inesperado", null))
    }
}
