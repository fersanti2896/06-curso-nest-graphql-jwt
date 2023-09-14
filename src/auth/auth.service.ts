import { Injectable } from '@nestjs/common';
import { SingUpInput } from './dto/inputs/signup.input';
import { AuthResponse } from './types/auth-response.type';

@Injectable()
export class AuthService {
    constructor() {}

    async signup( singupInput: SingUpInput ): Promise<AuthResponse> {
        console.log({ singupInput })
        throw new Error('No implementado');
    }
}
