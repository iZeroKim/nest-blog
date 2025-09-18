import { IsOptional, IsString } from "class-validator";

export class CreatePaymentInfoDto{
    @IsString()
    @IsOptional()
    accountNumber?: string;

    @IsString()
    @IsOptional()
    accountName?: string;
}