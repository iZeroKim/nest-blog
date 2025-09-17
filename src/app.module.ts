import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TweetModule } from './tweet/tweet.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { ProfileModule } from './profile/profile.module';
import { Profile } from './profile/profile.entity';
import { PaymentInfoModule } from './payment-info/payment-info.module';

@Module({
  imports: [
    UserModule,
    TweetModule,
    AuthModule,
    TypeOrmModule.forRootAsync(
      {
        imports:[],
        inject:[],
        useFactory: ()=>(
          {
            type: 'postgres',
            // entities: [
            //   User, Profile
            // ],
            synchronize: true,
            autoLoadEntities: true,
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: '16577561KIMsamP',
            database: 'nestjs2'
          }
        )
      }
    ),
    ProfileModule,
    PaymentInfoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
