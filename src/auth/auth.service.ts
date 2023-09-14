import { Injectable } from '@nestjs/common';
import { SingUpInput } from './dto/inputs/signup.input';
import { AuthResponse } from './types/auth-response.type';
import { UsersService } from '../users/users.service';

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
}
