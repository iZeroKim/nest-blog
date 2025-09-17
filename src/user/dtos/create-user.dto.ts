import { IsBoolean, IsEmail, IsIn, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class CreateUserDto {


    @IsString(
        {
            message: 'First Name must be a string'
        }
    )
    @IsNotEmpty(
        {
            message: 'First Name cannot be empty'
        }
    )
    @MinLength(3,
        {
            message: 'First Name must be at least 3 characters long'
        }
    )
    firstName: string;

    @IsString(
        {
            message: 'Last Name must be a string'
        }
    )
    @IsNotEmpty(
        {
            message: 'Last Name cannot be empty'
        }
    )
    @MinLength(3,
        {
            message: 'Last Name must be at least 3 characters long'
        }
    )
    lastName: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString(
        {
            message: 'Gender must be a string'
        }
    )
    @IsOptional()
    @IsIn(['male', 'female'],
        {
            message: 'Gender must be either male or female'
        }
    )
    gender: string;


    @IsString({
        message: 'Password must be a string'
    })
    @IsNotEmpty(
        {
            message: 'Password cannot be empty'
        }
    )
    @MinLength(8)
    password: string;
}