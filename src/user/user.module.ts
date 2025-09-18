import { Module, forwardRef } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from 'src/profile/profile.entity';
import { PaymentInfo } from 'src/payment-info/payment-info.entity';

@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
  imports:[TypeOrmModule.forFeature([
    User, Profile, PaymentInfo
  ])]
})
export class UserModule {}
