import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  async findAll(): Promise<User[]> {
    return [];
  }

  findOne( id: string ): Promise<User> {
    throw new Error('findOneMethod no implementado');
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  block( id: string ): Promise<User> {
    throw new Error('blockMethod no implementado');
  }
}
