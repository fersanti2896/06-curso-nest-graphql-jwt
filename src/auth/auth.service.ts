import { Injectable, BadRequestException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { AuthResponse } from './types/auth-response.type';
import { UsersService } from '../users/users.service';
import { LoginInput, SingUpInput } from './dto/inputs';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService
    ) {}

    /* Creación del usuario */
    async signup( singupInput: SingUpInput ): Promise<AuthResponse> {
        // TODO: Crear Usuario
        const user = await this.usersService.create( singupInput );

        // TODO: Crear JWT
        const token = 'abc123';
        
        return { token, user };
    }

    async login( loginInput: LoginInput ): Promise<AuthResponse> {
        const { email, password } = loginInput;
        const user = await this.usersService.findOneByEmail( email );

        if( !bcrypt.compareSync( password, user.password ) ) {
            throw new BadRequestException('Credenciales no válidas.');
        }

        // TODO: Crear JWT
        const token = 'abc123';

        return { token, user };
    }
}
