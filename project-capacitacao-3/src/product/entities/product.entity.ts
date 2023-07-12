import { User } from "src/user/entities/user.entity";
import { Column, Double, Entity,ManyToMany,ManyToOne,OneToMany,PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'Product'})
export class Product {
    @PrimaryGeneratedColumn()
    id_product:number;/*Codigo do produto */
    @Column()
    categoria:string;/*Categoria do produto : Vestiario, calçado, perfume e etc */
    @Column()
    nome:string;/*Calça de couro esfumado */
    @Column()
    preco:number;/*Preço do produto em si */
    @Column()
    tamanho:string /*Tamanhos PP, P, M , G, GG, XXG*/
    @Column()
    quantidade:number;

    @ManyToOne(() => User, user=>user.product)
    user:User


}
