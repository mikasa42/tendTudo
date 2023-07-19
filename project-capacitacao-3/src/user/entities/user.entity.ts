import { Product } from "src/product/entities/product.entity";
import {  Column, Entity,IsNull,ManyToMany,OneToMany,PrimaryGeneratedColumn} from "typeorm";
@Entity({name:'user'})
export class User {
    @PrimaryGeneratedColumn()/*Decorador para gerar id*/
    id:number
    @Column()
    username:string;/*Nome do usuario ou cliente para efetuar o login */
    @Column()
    password:string;/*Senha do usuario */
   /* @Column()
    tipoUsuario:string/*Destinção de usuario: Cliente ou Funcionario */
    @Column()
    createdAt:Date;

    @OneToMany(()=> Product, product => product.user)
    product: Product[]
}


