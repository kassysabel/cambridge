import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { endpoints } from "@constants/endpoints.const";
import { Article } from "@models/article.model";
import { User } from "@models/user.model";
import { Observable } from "rxjs";

@Injectable()
export class UserService {
    private _user: User;
    constructor(private http: HttpClient) {}

    get user() {
        return this._user;
    }

    set user(user: User) {
        this._user = user;
    }

    getAllUsers() : Observable<User[]> {
        return this.http.get<User[]>(endpoints.USERSLIST);
    }

    getUsers(user: string) : Observable<User> {
        let userLoggedInUrl = endpoints.USER.replace('user_number', user);
        return this.http.get<User>(userLoggedInUrl);
    }

    getArticlesOfUser(userNum: string): Observable<Article[]> {
        let articleByUserUrl = endpoints.ARTICLESBYUSER.replace('user_number', userNum);
        return this.http.get<Article[]>(articleByUserUrl);
    }
    
    loginUser(usersList: Array<User>, userEntered) {
       return usersList.find(userObj => 
            (userObj.email.toLowerCase() == userEntered.email.toLowerCase()) && (userObj.username.toLowerCase() == userEntered.username.toLowerCase())
        );
    }
}