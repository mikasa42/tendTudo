import { User } from "src/user/entities/user.entity";
import { Column, Double, Entity,ManyToOne,PrimaryGeneratedColumn } from "typeorm";

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

    @ManyToOne(() => User, user=>user.product)
    user:User[]


}
