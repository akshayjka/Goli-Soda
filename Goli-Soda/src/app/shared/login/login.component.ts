import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;
  hide = true;

  constructor(private fb: FormBuilder, private route:Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
    localStorage.setItem('username','admin@gmail.com');
    localStorage.setItem('password','admin');
  }

  onSubmit() {
    if (this.loginForm.valid) 
    {
      console.log(this.loginForm.value);
      const userName = localStorage.getItem('username');
      if(userName === 'admin@gmail.com') {
        this.route.navigateByUrl('side-menu')
      }
      else{
        alert('Invalid Credentials')
      }
    }
  }
  ngOnInit(): void {
  }

}
