import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './core/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm= this.fb.group({
    email: ['',[Validators.email]],
    password: ['']
  })

  loading = false;
 

  constructor(private fb: FormBuilder,private login: LoginService,private router: Router) { }

  ngOnInit(): void {
  }

  postLogin(){
    // this.loading = true
    const payload = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    }

    this.router.navigate(['/dashboard'])
    // this.login.login(payload).subscribe((resp:any) => {
    //   this.loading = false
    //   console.log(resp)
    // })
  }
}
