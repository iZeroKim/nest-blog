import { Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { TweetService } from './tweet.service';

@Controller('tweets')
export class TweetController {

    constructor(private readonly tweetService: TweetService){}
    @Get(':userid')
    public getTweet(
        @Param('userid', ParseIntPipe) userId: number
    ): {text: String, userName: String | undefined, date: Date}[] {
        return this.tweetService.getTweetsByUserId(userId);
    }


    @Post()
    createTweet(): string {
        return 'Tweet created';
    }
}
