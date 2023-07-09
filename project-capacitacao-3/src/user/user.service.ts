import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User)private userRepository:Repository<User> ){}
  create(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create({
      ...createUserDto,
    createdAt: new Date()
    })
    this.userRepository.save(newUser)
    /*return 'This action adds a new user';*/
  }

  findAll() {
    /*`This action returns all user` */
    return this.userRepository.find()
  }

  findOne(id: number) {
    /*`This action returns a #${id} user` */
    return this.userRepository.findOneBy({id});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    /*`This action updates a #${id} user`*/
    this.userRepository.update({id},{...updateUserDto})
  }

  remove(id: number) {
    /*`This action removes a #${id} user` */
    this.userRepository.delete({id})
  }
}
