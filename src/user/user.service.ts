import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { AuthService } from "src/auth/auth.service";

export type User = {
    id: number,
    name:string,
    email: string,
    gender: string,
    isMarried: boolean,
    password: string
}


@Injectable()
export class UserService {
    constructor(
        @Inject(forwardRef(()=> AuthService))
        private readonly authService: AuthService
    ){}
    users: User[] = [
        {id: 1, name: 'John Doe', email: 'john@gmail.com', gender: 'male', isMarried: false, password: 'test@123'},
        {id: 2, name: 'Jane Doe', email: 'jane@gmail.com', gender: 'female', isMarried: true, password: 'test@123'},
        {id: 3, name: 'Jim Doe', email: 'jim@gmail.com', gender: 'male', isMarried: false, password: 'test@123'},
        {id: 4, name: 'Jill Doe', email: 'jill@gmail.com', gender: 'female', isMarried: true, password: 'test@123'},
        {id: 5, name: 'Jack Doe', email: 'jack@gmail.com', gender: 'male', isMarried: false, password: 'test@123'},
    ];

    getUsersByMarried(isMarried: boolean): User[] {
        return this.users.filter(user => user.isMarried === isMarried);
    }

    getUsersByGenderAndMarried(gender: string, isMarried: boolean): User[] {
        // console.log(gender + ' passed ' + isMarried);
       
        return this.users.filter(user => {
            console.log('passed ' + gender + ' ' + isMarried + ' ' + user.gender + ' ' + user.isMarried);
            
            return user.gender == gender && user.isMarried === isMarried;


        }
);
    }

    getAllUsers() {
        if(this.authService.isAuthenticated)
        return this.users.reverse();

        return 'You are not authenticated';
    }

    getUserById(id: number): User | undefined {
        return this.users.find(user => user.id == id);
    }

    createUser(user: User): User {
        this.users.push(user);
        return user;
    }

    updateUser(id: number, user: User): User {
        const index = this.users.findIndex(user => user.id == id);
        this.users[index] = user;
        return user;
    }

    getUsersByGender(gender: string): User[] {
        return this.users.filter(user => user.gender == gender);
    }
    
}