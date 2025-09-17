import { IsBoolean, IsEmail, IsIn, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { CreateProfileDto } from "src/profile/dtos/create-profile.dto";

export class CreateUserDto {




    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(50)
    userName: string;

    @IsEmail()
    @IsNotEmpty()
    @MaxLength(100)
    email: string;




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

    @IsOptional()
    profile?: CreateProfileDto | undefined
}