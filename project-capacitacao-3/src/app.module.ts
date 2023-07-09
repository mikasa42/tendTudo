import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'sqlite',
    database:'db',
    entities:[],
    synchronize:true,
    autoLoadEntities:true,/*Importa as entidades automaticamente */
    



  })],

  controllers: [AppController],/*Rotas*/
  providers: [AppService],/*Manipulação dos dados*/
})
export class AppModule {}
