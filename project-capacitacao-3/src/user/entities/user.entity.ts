import { Product } from "src/product/entities/product.entity";
import {  Column, Entity,IsNull,ManyToMany,OneToMany,PrimaryGeneratedColumn} from "typeorm";
@Entity({name:'user'})
export class User {
    @PrimaryGeneratedColumn()/*Decorador para gerar id*/
    id:number
    @Column()
    username:string
    @Column()
    password:string
    /*@Column()
    tipoUsuario:string*/
    @Column()
    createdAt:Date

    @OneToMany(()=> Product, product => product.user)
    product: Product[]
}


