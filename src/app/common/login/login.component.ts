import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { IUser } from '../service/user';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: IUser = {
    email: '',
    password: '',
  };

  constructor(
    private loginService: LoginService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  login() {
    this.loginService.login(this.user).subscribe((data) => {
      if (data.status === 'success') {
        this.navigate(data.role);
      } else {
        this.snackBar.open(data.message, 'login', {
          duration: 1000
        });
      }
    });
  }

  // tslint:disable-next-line: typedef
  navigate(role: string) {
    switch (role) {
      case 'User':
        // redirect to UserDashboard
        this.router.navigate(['/user/dashboard']);
        break;
      case 'admin':
        // redirect to AdminDashboard
        this.router.navigate(['/admin/dashboard']);
        break;
      default:
        this.snackBar.open('User doesn\'t belong to valid role!', 'Login', {
          duration: 1000
        });
    }
  }

}
