import { Injectable, BadRequestException, InternalServerErrorException, Logger } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { UpdateUserInput } from './dto/update-user.input';
import { SingUpInput } from '../auth/dto/inputs/signup.input';

@Injectable()
export class UsersService {
  private logger = new Logger('UsersService');

  constructor(
    @InjectRepository( User )
    private readonly usersRepository: Repository<User>
  ) {}

  async create( singupInput: SingUpInput ): Promise<User> {
    try { 
      const newUser = this.usersRepository.create({
        ...singupInput,
        password: bcrypt.hashSync( singupInput.password, 10 )
      });

      return await this.usersRepository.save( newUser );
    } catch (error) {
      this.handleDBErrors( error );
    }
  }

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

  private handleDBErrors( error: any ): never {
    if( error.code === '23505' ) {
      throw new BadRequestException( error.detail.replace('Key', '') );
    }

    this.logger.error( error );
    throw new InternalServerErrorException('Favor de verificar los logs del servidor.')
  }
}
