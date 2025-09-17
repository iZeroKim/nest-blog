import { Body, Controller, DefaultValuePipe, Get, Param, ParseBoolPipe, ParseIntPipe, Patch, Post, Put, Query, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { error } from 'console';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';



@Controller('users')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) { }

    @Get()
    getUsers(){
        return this.userService.getUsers();
    }


    @Post()
    createUser(@Body() user: CreateUserDto){
        console.log(user);
        return this.userService.createUser(user);

    }

   
}
