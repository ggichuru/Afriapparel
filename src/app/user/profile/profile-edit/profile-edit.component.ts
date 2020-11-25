import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ProfileService } from '../service/profile.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {
  editForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.editForm = this.fb.group({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl({value: '', disabled: true}),
      addressInfo: this.fb.group({
        addressLine1: new FormControl(''),
        addressLine2: new FormControl(''),
        city: new FormControl(''),
        pin: new FormControl(''),
      })
    });

    this.bindUserData();
  }

  // tslint:disable: typedef
  bindUserData() {
    this.profileService.getProfile().subscribe(user => {
      this.editForm.patchValue(user.data);
    });
  }

  updateProfile() {
    this.profileService.updateProfile(this.editForm.getRawValue()).subscribe( data => {
      this.snackBar.open('Profile Updated', 'user', {
        duration: 1000
      });
    });
  }

}
