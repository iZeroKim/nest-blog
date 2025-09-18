import { Module } from '@nestjs/common';
import { PaymentInfoController } from './payment-info.controller';
import { PaymentInfoService } from './payment-info.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentInfo } from './payment-info.entity';

@Module({
  controllers: [PaymentInfoController],
  providers: [PaymentInfoService],
  imports: [TypeOrmModule.forFeature([PaymentInfo])]
})
export class PaymentInfoModule {}
