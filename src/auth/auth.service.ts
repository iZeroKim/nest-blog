import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(
        @Inject(forwardRef(() => UserService))
        private readonly userService: UserService
    ) { }
    isAuthenticated: Boolean = false;


    login(email: string, passwd: string): string {
        const user = this.userService.users.find(user => user.email === email && user.password === passwd);
        if (user) {
            this.isAuthenticated = true;
            return 'MY_TOKEN';
        }
        return 'User does not exist';

    }
}
