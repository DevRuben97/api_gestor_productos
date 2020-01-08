import {Request,Response} from 'express';


export function ProductList(Req: Request, Res: Response){

    Res.send({
        name: 'Ruben',
        surname: 'Batista'
    })
}
export function FindById(Req: Request, Res: Response){
    Res.send({
        name: 'Ruben01',
        surname: 'Batista01'
    })
}