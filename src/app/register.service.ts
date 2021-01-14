// import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../models/auth.service';
// import { Router } from '@angular/router';
// import { User } from '../models/user.model';
// import { LoginService } from '../models/login.service';


// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent implements OnInit {
//   error: any;
//   user: User = new User;
  

//   constructor(public loginService: LoginService,
//     private authService: AuthService,private router: Router) { }

//   ngOnInit(): void {

//   }

//   signupUser(Username: string,Email: string, Password1: string, Password2: string) {
//     console.log('Username,Email,Password1,Password2 ', Username,Email,Password1,Password2);

//     this.authService.signup(Username, Email, Password1, Password2).subscribe(
//       (success) => {
//         this.router.navigate(['/homepage']);
//       },
//       (error) => (this.error = error)
//     );
//   }
// }
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get data() { return this.registerForm.controls; }

  onSubmit() {    
    if (this.registerForm.invalid) {
      return;
    } else {
      localStorage.setItem("firstname", this.data.firstname.value);
      localStorage.setItem("lastname", this.data.lastname.value);
      localStorage.setItem("email", this.data.email.value);
      localStorage.setItem("password", this.data.password.value);
      localStorage.setItem("user", this.data.user.value);
      this._snackBar.open('Register Successfully', 'Success', {
        duration: 2000,
      });
      this.router.navigate(['/login']);
    }
  }
}


