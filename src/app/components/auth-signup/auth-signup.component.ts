import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.css']
})
export class AuthSignupComponent {

  user = new User({
    username: '',
    email: '',
    password: ''
  });

  error: string;
  message: string;

  constructor(private auth: AuthService, private router: Router) { }

  signup() {
    this.error = null;
    this.auth.signup(this.user).subscribe(
      (user) => {
        if (user.email) {
          this.user = user;
          this.router.navigate(['/profile'])
        } else {this.message}
      },
      (err) => this.error = err
    );
  }
}
