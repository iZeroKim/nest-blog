import { IsBoolean, IsEmail, IsIn, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    @IsNumber()
    id: number;

    @IsString(
        {
            message: 'Name must be a string'
        }
    )
    @IsNotEmpty(
        {
            message: 'Name cannot be empty'
        }
    )
    @MinLength(3,
        {
            message: 'Name must be at least 3 characters long'
        }
    )
    name: string;

    @IsEmail()
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

    @IsBoolean(
        {
            message: 'IsMarried must be a boolean'
        }
    )
    isMarried: boolean;
}