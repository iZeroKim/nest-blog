import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dtos/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post()
    login( @Body() credentials: LoginDto): string{
        console.log(credentials.email + ' ' + credentials.password);
        return this.authService.login(credentials.email, credentials.password);
    }
}
