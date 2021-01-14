import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-doc-login',
  templateUrl: './doc-login.component.html',
  styleUrls: ['./doc-login.component.css']
})
export class DoctorLoginComponent implements OnInit {
  DoctorForm!: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.DoctorForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      speciality: ['', Validators.required],
      Email: ['', Validators.required],
      phonenumber: ['', Validators.required],

    });
  }

  get data() { return this.DoctorForm.controls; }

  onSubmit() {    
    if (this.DoctorForm.invalid) {
      return;
    } else {
      localStorage.setItem("firstname", this.data.firstname.value);
      localStorage.setItem("lastname", this.data.lastname.value);
      localStorage.setItem("age", this.data.age.value);
      localStorage.setItem("speciality", this.data.speciality.value);
      localStorage.setItem("phonenumber", this.data.phonenumber.value);

      this._snackBar.open('Welcome, Registered successfully', 'Success', {
        duration: 2000,
      });
      this.router.navigate(['/login']);
    }
  }
}




