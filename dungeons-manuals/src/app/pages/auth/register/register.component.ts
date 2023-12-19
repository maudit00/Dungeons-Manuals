import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { IRegister } from '../../../models/auth/i-register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  constructor (private authSvc:AuthService, private fb:FormBuilder){}

  registerForm:FormGroup = this.fb.group({

    name: this.fb.control(null, [Validators.required, Validators.minLength(2)]),
    surname: this.fb.control(null, [Validators.required, Validators.minLength(2)]),
    email: this.fb.control(null, [Validators.required, Validators.pattern(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/)]),
    password: this.fb.control(null, [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
    confirmPassword: this.fb.control(null, [Validators.required])

  });

  register():void{

    console.log(this.registerForm.value);



  }

}
