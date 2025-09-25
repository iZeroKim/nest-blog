import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { PaymentInfo } from './payment-info.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PaymentInfoService {
    constructor(
        @InjectRepository(PaymentInfo)
        private readonly paymentInfoRepository: Repository<PaymentInfo>){}


        getPaymentInfos(){
            return this.paymentInfoRepository.find();
        }
}
