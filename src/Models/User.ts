import BaseModel from './BaseModel';
import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export default class User implements BaseModel{

    @PrimaryGeneratedColumn()
    Id: number= 0;
    @Column()
    Name: string= "";
    @Column()
    SurName: string= "";    
    @Column()
    CreatedDate: string="";
    @Column()
    ModificationDate: string="";
    @Column()
    State: number=0;


}