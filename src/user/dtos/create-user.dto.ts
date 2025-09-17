import { IsBoolean, IsEmail, IsIn, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

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
    @MaxLength(100,
        {
            message: 'Last Name must be at most 100 characters long'
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
    @MaxLength(100,
        {
            message: 'Last Name must be at most 100 characters long'
        }
    )
    lastName: string;

    @IsEmail()
    @IsNotEmpty()
    @MaxLength(100)
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
    @MaxLength(10)
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
    @MaxLength(100)
    password: string;
}