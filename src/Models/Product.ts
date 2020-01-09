import BaseModel from '../Models/BaseModel'
import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export default class Product implements BaseModel{

    @PrimaryGeneratedColumn()
    Id: number =0;
    @Column()
    Code: number= 0;
    @Column()
    Name: string= "";
    @Column()
    SurName: string= "";
    @Column()
    Price: string= "";
    @Column()
    Cost: string= "";
    @Column()
    Stock: number= 0;
    @Column()
    Taxed: boolean= false;
    @Column()
    Category: string= "";
    @Column()
    Provider: string= "";
    @Column()
    CreatedDate: string= "";
    @Column()
    ModificationDate: string= "";
    @Column()
    State: number= 1;

    
}