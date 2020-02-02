import BaseModel from './BaseModel';
import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany} from 'typeorm';
import Movement from './Movement';

@Entity()
export default class User extends BaseEntity implements BaseModel{

    @PrimaryGeneratedColumn()
    Id: number= 0;
    @Column()
    Name: string= "";
    @Column()
    SurName: string= ""; 
    @Column()
    Email: string= "";
    @Column({nullable: true})
    Identification: string= "";
    @Column()
    Password: string="";
    @Column()
    PhoneNumber: string="";   
    @Column()
    CreatedDate: string="";
    @Column()
    ModificationDate: string="";
    @Column()
    State: number=0;

    //Navigation Properties:
    @OneToMany(type => Movement, movement => movement.User_id)
    Movements!: Movement[];

    

}