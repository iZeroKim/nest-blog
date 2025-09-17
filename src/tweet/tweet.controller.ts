import { Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { TweetService } from './tweet.service';

@Controller('tweets')
export class TweetController {

    constructor(private readonly tweetService: TweetService){}
   


    @Post()
    createTweet(): string {
        return 'Tweet created';
    }
}
