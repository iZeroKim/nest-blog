import { IsBoolean, IsDate, IsEmail, IsIn, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, MaxLength, MinLength } from "class-validator";

export class CreateProfileDto {

    @IsString()
    @MinLength(3)
    @MaxLength(100)
    @IsOptional()
    FirstName?: string;

    @IsString()
    @MinLength(3)
    @MaxLength(100)
    @IsOptional()
    LastName?: string;

    @IsString()
    @IsOptional()
    @MaxLength(10)
    @IsIn(['male', 'female'], {
        message: 'Gender has to be either male or female'
    })
    gender?: string;


    @IsOptional()
    @IsDate()
    dateOfBirth?: Date;

    @IsString()
    @IsOptional()
    bio?: string;


    @IsString()
    @IsOptional()
    profileImage?: string;
}