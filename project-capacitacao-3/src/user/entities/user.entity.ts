import {  Column, Entity,PrimaryGeneratedColumn} from "typeorm";
@Entity({name:'user'})
export class User {
    @PrimaryGeneratedColumn()/*Decorador para gerar id*/
    id:number
    @Column()
    username:string
    @Column()
    password:string
    @Column()
    tipo:string
}


