import { Injectable } from "@angular/core";
import { CanActivate, CanActivateChild, Router } from "@angular/router";
import { UserService } from "@services/users.service";
import { Observable } from "rxjs";

@Injectable()
export class LoginGuard implements CanActivate, CanActivateChild {

    constructor(private userService: UserService, private router: Router) {}
    canActivate(): boolean | Observable<boolean> | Promise<boolean> {
        if(this.userService.user) {
            return true;
        } else {
            this.router.navigate(['login']);
            return false;
        }
    }

    canActivateChild(): boolean | Observable<boolean> | Promise<boolean> {
        if(this.userService.user) {
            return true;
        } else {
            this.router.navigate(['login']);
            return false;
        }
    }
}