import BaseModel from './BaseModel';
import {BaseEntity, Entity, PrimaryGeneratedColumn, Column} from 'typeorm';
@Entity()
export default class ApplicationCode extends BaseEntity implements BaseModel{

    @PrimaryGeneratedColumn()
    Id: number= 0;
    @Column()
    CodeId: string="";
    @Column()
    Description: string="";
    @Column()
    CreatedDate: string= "";
    @Column()
    ModificationDate: string= "";
    @Column()
    State: number= 1;
}