import { Controller, Get } from '@nestjs/common';
import { PaymentInfoService } from './payment-info.service';

@Controller('payment-infos')
export class PaymentInfoController {
    constructor(private readonly paymentInfoService: PaymentInfoService){}

    @Get()
    async getPaymentInfos(){
        return (await this.paymentInfoService.getPaymentInfos()).reverse();
    }
}
