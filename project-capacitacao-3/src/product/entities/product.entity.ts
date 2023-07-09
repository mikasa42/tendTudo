import { Column, Double, Entity,PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'Product'})
export class Product {
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    tipo:string
    @Column()
    preco:number
    @Column()
    tamanho:string /*Tamanhos PP, P, M , G, GG, XXG*/
    @Column()
    quantidade:number


}
