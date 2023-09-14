import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { SingUpInput } from './dto/inputs/signup.input';
import { AuthResponse } from './types/auth-response.type';

@Resolver()
export class AuthResolver {
  constructor( private readonly authService: AuthService ) {}

  @Mutation( () => AuthResponse, { name: 'signup' } )
  async signUp( @Args('signupInput') singupInput: SingUpInput ): Promise<AuthResponse> {
    return this.authService.signup( singupInput );
  }

  // @Mutation(  , { name: 'login' } )
  // async login( /* Información del front */ ): Promise<> {
  //   return this.authService.login(  )
  // }

  // @Query( , { name: 'revalidate' } )
  // async revalidateToken() {
  //   return this.authService.revalidateToken;
  // }
}
