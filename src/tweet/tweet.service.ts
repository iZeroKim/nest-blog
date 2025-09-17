import { Injectable } from "@nestjs/common";
import { UserService } from "src/user/user.service";

@Injectable()
export class TweetService {

    tweets: { text: String, userId: Number, date: Date }[] = [
        { text: 'Hello, world!', userId: 1, date: new Date() },
        { text: 'This is a tweet', userId: 5, date: new Date() },
        { text: 'A tweet about the weather', userId: 6, date: new Date() },
        { text: 'A tweet about the weather and the weather is good', userId: 4, date: new Date() },
        { text: 'This is a tweet about the weather and the weather is good', userId: 1, date: new Date() },
    ];

    

}