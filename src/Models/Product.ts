import BaseModel from '../Models/BaseModel'
import {Entity,Column,PrimaryGeneratedColumn, BaseEntity, OneToMany} from 'typeorm'
import MovementDetails from './MovementDetails';

@Entity()
export default class Product extends BaseEntity implements BaseModel{

    @PrimaryGeneratedColumn()
    Id: number =0;
    @Column()
    Code: number= 0;
    @Column()
    Name: string= "";
    @Column()
    Price: string= "";
    @Column()
    Cost: string= "";
    @Column()
    Stock: number= 0;
    @Column()
    Taxed: boolean= false;
    @Column({nullable: true})
    Description: string="";
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

    //Navigation properties:
    @OneToMany(type=> MovementDetails, dt=> dt.Product)
    MovementDetails!: MovementDetails[]
    
}