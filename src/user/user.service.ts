import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { User } from "./user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "./dtos/create-user.dto";



@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) { }

    public async getUsers(){
        return (await this.userRepository.find()).reverse();
    }

    public async createUser(userDto: CreateUserDto) {
        // check if user with email exists
        const user = await this.userRepository.findOne({
            where: { email: userDto.email }
        })
        // handle error
        if (user) {
            return 'User with given email exists';
        }

        // create user
        let newUser = this.userRepository.create(userDto);
        return await this.userRepository.save(newUser);

    }

}