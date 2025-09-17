import { Controller, Get, Post } from '@nestjs/common';
import { TweetService } from './tweet.service';

@Controller('tweet')
export class TweetController {

    constructor(private readonly tweetService: TweetService){}
    @Get()
    getTweet(): string {
        return 'User tweets';
    }


    @Post()
    createTweet(): string {
        return 'Tweet created';
    }
}
