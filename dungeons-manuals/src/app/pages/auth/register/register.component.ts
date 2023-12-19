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

  match: boolean = false;

  registerForm:FormGroup = this.fb.group({

    name: this.fb.control(null, [Validators.required, Validators.minLength(2)]),
    surname: this.fb.control(null, [Validators.required, Validators.minLength(2)]),
    email: this.fb.control(null, [Validators.required, Validators.pattern(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/)]),
    password: this.fb.control(null, [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
    confirmPassword: this.fb.control(null, [Validators.required])

  });


  registered:boolean = false;

  register(){

    this.authSvc.signUp(this.registerForm.value).subscribe(res => this.registered = true );

  }

  isValid(inputName:string){

    return this.registerForm.get(inputName)?.valid && this.registerForm.get(inputName)?.dirty

  }

  isInvalid(inputName:string){

    return !this.registerForm.get(inputName)?.valid && this.registerForm.get(inputName)?.dirty

  }

  comparePassword(){

    if(this.registerForm.controls["password"].value === this.registerForm.controls["confirmPassword"].value && this.registerForm.controls["confirmPassword"].dirty){

      this.match = true
      alert("Le password combaciano")

    }else{

      this.match = false
      alert("Le password non combaciano")

    }

  }

}
