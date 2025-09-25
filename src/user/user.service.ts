import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { User } from "./user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "./dtos/create-user.dto";
import { Profile } from "src/profile/profile.entity";
import { PaymentInfo } from "src/payment-info/payment-info.entity";



@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        @InjectRepository(Profile)
        private profileRepository: Repository<Profile>,
        @InjectRepository(PaymentInfo)
        private paymentInfoRepository: Repository<PaymentInfo>,
    ) { }

    public async getUsers() {
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
        userDto.paymentInfo = userDto.paymentInfo ?? {};

        let user = this.userRepository.create(userDto);


        // Save user object
        return await this.userRepository.save(user);

    }

    public async deleterUser(id: number) {
        //find user by id
        const user = await this.userRepository.findOneBy({
            id: id
        });

        //find related profile
        // if(user?.profile)
        const relatedProfile = await this.profileRepository.findOneBy({
            id: user?.profile?.id
        });

        const relatedAccount = await this.paymentInfoRepository.findOneBy({ id });



        //delete user 
        if (user?.id)
            this.userRepository.delete(user?.id);
        if (relatedProfile?.id)
            this.profileRepository.delete(relatedProfile?.id);

        if (relatedAccount?.id)
            this.paymentInfoRepository.delete(relatedAccount?.id);

        return {
            deleted: true
        }

    }

}