import BaseModel from '../Models/BaseModel'

export default class Product implements BaseModel{

    Id: number =0;
    Code: number= 0;
    Name: string= "";
    SurName: string= "";
    Price: string= "";
    Cost: string= "",
    Stock: number= 0;
    Taxed: boolean= false;
    Category: string= "";
    Provider: string= "";
    CreatedDate: string= "";
    ModificationDate: string= "";
    State: number= 1;

    
}