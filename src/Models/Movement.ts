import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import BaseModel from "./BaseModel";
import MovementDetails from './MovementDetails';
import User from './User';

@Entity()
export default class Movement extends BaseEntity implements BaseModel{
    @PrimaryGeneratedColumn()
    Id: number= 0;
    @Column()
    Date: string="";
    @Column()
    Invoice: string=""
    @Column()
    Amount: number= 0
    @Column()
    Comments: string="";
    @Column()
    Type: string= "";
    @Column()
    User_id: number= 0;
    @Column()
    CreatedDate: string= "";
    @Column()
    ModificationDate: string= "";
    @Column()
    State: number= 1;


    //Navigation properties:
    @OneToMany(type=> MovementDetails, Details=> Details.Movement_id)
    Details!: MovementDetails[]

    @ManyToOne(type=> User, us=> us.Movements)
    @JoinColumn({name: 'User_id'})
    User!: User

}