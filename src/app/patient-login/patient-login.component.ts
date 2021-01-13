import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})
export class PatientLoginComponent implements OnInit {
  patientForm!: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.patientForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      disease: ['', Validators.required],
      phonenumber: ['', Validators.required],

    });
  }

  get data() { return this.patientForm.controls; }

  onSubmit() {    
    if (this.patientForm.invalid) {
      return;
    } else {
      localStorage.setItem("firstname", this.data.firstname.value);
      localStorage.setItem("lastname", this.data.lastname.value);
      localStorage.setItem("age", this.data.age.value);
      localStorage.setItem("gender", this.data.gender.value);
      localStorage.setItem("disease", this.data.disease.value);
      localStorage.setItem("phonenumber", this.data.phonenumber.value);

      this._snackBar.open('Welcome, Registered successfully', 'Success', {
        duration: 2000,
      });
      this.router.navigate(['/login']);
    }
  }
}



