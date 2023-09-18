import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common'
import { AuthService } from './auth.service';
import { AuthResponse } from './types/auth-response.type';
import { LoginInput, SingUpInput } from './dto/inputs';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Resolver()
export class AuthResolver {
  constructor( private readonly authService: AuthService ) {}

  @Mutation( () => AuthResponse, { name: 'signup' } )
  async signUp( @Args('signupInput') singupInput: SingUpInput ): Promise<AuthResponse> {
    return this.authService.signup( singupInput );
  }

  @Mutation( () => AuthResponse, { name: 'login' } )
  async login( @Args('loginInput') loginInput: LoginInput ): Promise<AuthResponse> {
    return this.authService.login( loginInput )
  }

  @Query( () => AuthResponse, { name: 'revalidate' } )
  @UseGuards( JwtAuthGuard )
  revalidateToken(): AuthResponse {
    // return this.authService.revalidateToken(  );
    throw new Error('No implementado')
  }
}
