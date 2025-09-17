import { Body, Controller, DefaultValuePipe, Get, Param, ParseBoolPipe, ParseIntPipe, Patch, Post, Put, Query, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { error } from 'console';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';


type User = {
    id: number,
    name: string,
    email: string,
    gender: string,
    isMarried: boolean
}

@Controller('users')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) { }

    @Get()
    getUsers(
        @Query('isMarried', new DefaultValuePipe(false), ParseBoolPipe)
        isMarried: boolean,
        @Query('gender', new DefaultValuePipe('female'))
        gender: string,
    ): User[] {
        console.log(isMarried);
        console.log(gender);

        if (gender && isMarried) {
            return this.userService.getUsersByGenderAndMarried(gender, isMarried);
        }
        return this.userService.getAllUsers().reverse();
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number): User | undefined {
        
        return this.userService.getUserById(id);
    }

    @Get('/gender/:gender')
    getUsersByGender(@Param('gender') gender: string): User[] {
        
        return this.userService.getUsersByGender(gender);
    }

    @Post()
    createUser(
        @Body() user: CreateUserDto
    ): String {
        console.log(user);
        console.log(this.userService);
        this.userService.createUser(user);
        return 'A new user has been created ' + user.name;
    }

    @Patch()
    updateUser(
        @Body() user: UpdateUserDto
    ): string {
        console.log(user);
        this.userService.updateUser(user.id ??0, {
            id: user.id ??0,
            name: user.name ?? '',
            email: user.email ?? '',
            gender: user.gender ?? '',
            isMarried: user.isMarried ?? false
        });
        return 'User updated successfully with id ' + user.id;
    }
}
