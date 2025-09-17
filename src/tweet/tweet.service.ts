import { Injectable } from "@nestjs/common";
import { UserService } from "src/user/user.service";

@Injectable()
export class TweetService {
    constructor(private readonly userService: UserService) { }

    tweets: { text: String, userId: Number, date: Date }[] = [
        { text: 'Hello, world!', userId: 1, date: new Date() },
        { text: 'This is a tweet', userId: 5, date: new Date() },
        { text: 'A tweet about the weather', userId: 6, date: new Date() },
        { text: 'A tweet about the weather and the weather is good', userId: 4, date: new Date() },
        { text: 'This is a tweet about the weather and the weather is good', userId: 1, date: new Date() },
    ];

    getTweetsByUserId(userId: number): { text: String, userName: String | undefined, date: Date }[] {
        const user = this.userService.getUserById(userId);
        console.log(user);
        const tweets = this.tweets.filter(tweet => tweet.userId === userId);
        const response = tweets.map(tweet => {
            return {
                text: tweet.text,
                userName: user?.name,
                date: tweet.date,



            }
        });
        return response;
    }

}