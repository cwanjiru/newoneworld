import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators , FormControl} from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;


  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';

  constructor(public fb:FormBuilder, public router:Router, public userService:UserService) { }

  ngOnInit(){
    this.signUpForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  get getControl(){
    return this.signUpForm.controls;
  }

  validateAllSignUpFormFields(formGroup: FormGroup) {         
    Object.keys(formGroup.controls).forEach(field => {  
      const control = formGroup.get(field);            
      if (control instanceof FormControl) {            
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {        
        this.validateAllSignUpFormFields(control);           
      }
    });
  }

  onRegistration() {
    if(this.signUpForm.valid){
    this.userService.registerUser(this.signUpForm.getRawValue()).subscribe((response) => {
      
    })
  }
  else{
      this.validateAllSignUpFormFields(this.signUpForm);
    }
  }

}
