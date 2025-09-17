import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { User } from "./user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "./dtos/create-user.dto";
import { Profile } from "src/profile/profile.entity";



@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        @InjectRepository(Profile)
        private profileRepository: Repository<Profile>,
    ) { }

    public async getUsers(){
        return (await this.userRepository.find(
        //     {
        //     relations:{
        //         profile: true
        //     }
        // }
    )).reverse();
    }

    public async createUser(userDto: CreateUserDto) {
        //use cascading instead

        // // Create a profile & save
        // let profile = this.profileRepository.create(userDto.profile ?? {});
        // await this.profileRepository.save(profile);

        // Create user object 

        userDto.profile = userDto.profile ?? {};
        let user = this.userRepository.create(userDto);

       
        // Save user object
        return await this.userRepository.save(user);

    }

}