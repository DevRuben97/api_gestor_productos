import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import BaseModel from "./BaseModel";
import Movement from './Movement';
import Product from './Product';

@Entity()
export default class MovementDetails extends BaseEntity implements BaseModel{

    @PrimaryGeneratedColumn()
    Id: number= 0;
    @Column()
    Movement_id: number= 0;
    @Column()
    Product_id: number= 0;
    @Column()
    Quantity: number= 0;
    @Column()
    CreatedDate: string= "";
    @Column()
    ModificationDate: string= "";
    @Column()
    State: number= 1;

    //Navigation properties:
    @ManyToOne(type=> Movement, movement=> movement.Details)
    @JoinColumn({name: 'Movement_id'})
    Movement!: Movement;
    @ManyToOne(type=> Product, product=> product.MovementDetails)
    @JoinColumn({name: 'Product_id'})
    Product!: Product;

}