import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'sqlite',
    database:'db',
    entities:[],
    synchronize:true,
    autoLoadEntities:true,/*Importa as entidades automaticamente */
    



  }), UserModule, ProductModule],

  controllers: [AppController],/*Rotas*/
  providers: [AppService],/*Manipulação dos dados*/
})
export class AppModule {}
