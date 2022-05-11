
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { User, UserId } from "@models/user.model";
import { UserService } from "@services/users.service";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    user: UserId = new UserId();
    listUsers: Array<User>;
    loginForm: FormGroup;
    isAccountFound: boolean = true;
    constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router) {}

    ngOnInit() {
        this.getAllUsers();
        this.loginForm = this.formBuilder.group({
            email: ['', new FormControl(Validators.required, Validators.email)],
            username: ['', new FormControl(Validators.required)]
        });
    }

    getAllUsers() {
        this.userService.getAllUsers().subscribe((users) => {
            this.listUsers = users;
        })
    }

    loginUser() {
        this.user = this.loginForm.value;
        let userFound = this.userService.loginUser(this.listUsers, this.user);
        this.userService.user = userFound ? userFound : new User();
        if (this.userService.user.id != undefined || this.userService.user.id != null) {
            this.isAccountFound = true;
            this.router.navigate(['articles']);
        } else {
            this.isAccountFound = false;
        }
    }
}