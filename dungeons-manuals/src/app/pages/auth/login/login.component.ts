import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ILogin } from '../../../models/auth/i-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private authSvc: AuthService, private fb: FormBuilder, private router: Router
  ) { }

  errorMsg!: ILogin;
  msg!: ILogin;





  loginForm: FormGroup = this.fb.group({

    email: this.fb.control(null, [Validators.required, Validators.pattern(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/)]),
    password: this.fb.control(null, [Validators.required, Validators.minLength(8), Validators.maxLength(16)])

  });

  invalidMessages(fieldName: string): string {

    const field: AbstractControl | null = this.loginForm.get(fieldName);
    let errorMsg: string = ''
    if (field) {

      if (field.errors) {

        if (field.errors['required']) errorMsg = 'Campo vuoto';
        if (field.errors['minLength'] && fieldName === 'passoword') errorMsg = 'Lunghezza minima password 8 caratteri';
        if (field.errors['maxLength']&& fieldName === 'passoword') errorMsg = 'Lunghezza massima password 16 caratteri';
        if (field.errors['pattern']) errorMsg = 'Formato mail errato';
      }
    }
    return errorMsg;
  }

  isValid(inputName: string) {
    return this.loginForm.get(inputName)?.valid && this.loginForm.get(inputName)?.dirty
  }

  isInvalid(inputName: string) {
    return !this.loginForm.get(inputName)?.valid && this.loginForm.get(inputName)?.dirty
  }

  ngDoCheck() {

    this.errorMsg = {

      email: this.invalidMessages('email'),
      password: this.invalidMessages('password')

    }

    this.msg = {

      email: '',
      password: ''

    }

    if (this.errorMsg.email) {

      this.msg.email = this.errorMsg.email

    } else {

      this.msg.email = 'Campo compilato correttamente'

    }

    if (this.errorMsg.password) {

      this.msg.password = this.errorMsg.password

    } else {

      this.msg.password = 'Password corretta'
    }
  }


  logIn(){
    this.authSvc.logIn(this.loginForm.value).subscribe(data =>{
      alert('sel loggato')
    })
  }
}
