import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { RUser } from '../service/register';
import { AlertService } from '../service/alert.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Role {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide = true;
  form: FormGroup;
  loading = false;
  submitted = false;
  roles: Role[] = [
    {value: 'user', viewValue: 'User'}
  ];

  user: RUser = {
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    mobile: '',
    role: '',
  };

  constructor(
    private loginService: LoginService,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  // tslint:disable-next-line: typedef
  get f() {
    return this.form.controls;
  }



  // tslint:disable: typedef

  register() {
    if (this.form.invalid) {
      return this.snackBar.open('Invalid entries, Check your form! ', 'Registration Error', {
        duration: 1000
      });
    }
    this.loginService.register(this.form.value)
        .pipe(first())
        .subscribe({
          next: () => {
            this.alertService.success('Registration Successful', {
              keepAfterRouteChange: true
            });
            this.router.navigate(['/login'], {relativeTo: this.route});
          },
          error: error => {
            this.alertService.error(error);
          }
      });
  }


}
