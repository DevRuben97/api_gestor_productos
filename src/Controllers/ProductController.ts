import {Request,Response} from 'express';
//import {getConnection} from 'typeorm';
import User from '../Models/User'


//const connection= getConnection('default');

export function ProductList(Req: Request, Res: Response){

    //var repo= connection.getRepository(User);

    

}
export function FindById(Req: Request, Res: Response){
    Res.send({
        name: 'Ruben01',
        surname: 'Batista01'
    })
}