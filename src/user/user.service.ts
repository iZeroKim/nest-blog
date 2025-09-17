import { Injectable } from "@nestjs/common";

export type User = {
    id: number,
    name:string,
    email: string,
    gender: string,
    isMarried: boolean
}


@Injectable()
export class UserService {
    users: User[] = [
        {id: 1, name: 'John Doe', email: 'john@gmail.com', gender: 'male', isMarried: false},
        {id: 2, name: 'Jane Doe', email: 'jane@gmail.com', gender: 'female', isMarried: true},
        {id: 3, name: 'Jim Doe', email: 'jim@gmail.com', gender: 'male', isMarried: false},
        {id: 4, name: 'Jill Doe', email: 'jill@gmail.com', gender: 'female', isMarried: true},
        {id: 5, name: 'Jack Doe', email: 'jack@gmail.com', gender: 'male', isMarried: false},
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

    getAllUsers(): User[] {
        return this.users;
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