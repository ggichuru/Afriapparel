import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { IUser } from '../service/user';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EncDecService } from '@ecom/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  user: IUser = {
    email: '',
    password: '',
  };


  constructor(
    private loginService: LoginService,
    private snackBar: MatSnackBar,
    private router: Router,
    private encdecservice: EncDecService
  ) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  login() {
    this.loginService.login(this.user).subscribe((response) => {
      if (response.status === 'success') {
        const role = this.encdecservice.encrypt(response.role, '');
        sessionStorage.setItem('role', role);
        sessionStorage.setItem('token', response.data);
        this.loginService.isLoggedIn(true);
        this.loginService.userRole(response.role);
        this.navigate(response.role);
      } else {
        this.snackBar.open(response.message, 'login', {
          duration: 1000
        });
      }
    });
  }

  // tslint:disable-next-line: typedef
  navigate(role: string) {
    switch (role) {
      case 'user':
        // redirect to UserDashboard
        this.router.navigate(['/user/product']);
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
