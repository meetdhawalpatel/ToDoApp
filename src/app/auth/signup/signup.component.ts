import { Router } from '@angular/router';
import { AuthService } from './../../auth.service';
import { ChangePasswordValidator } from './../../validator/change-password.validators';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form : FormGroup;
  
  ngOnInit(): void {
  }

  constructor(private _authService : AuthService, fb: FormBuilder,
      private _router: Router) {
    this.form = fb.group({
      name : ['',Validators.required],
      mobile : ['',Validators.required],
      email : ['',Validators.email],
      passwordgroup : fb.group({
        password : ['', Validators.required],
        confirm_password : ['', Validators.required]
      },
      {
        validators:ChangePasswordValidator.ShouldBeSame
      })
    });
   }

  signup(){
    if(this.form.valid)
    {
      let status = this._authService.registor({
          name : this.name.value,
          email : this.email.value,
          mobile : this.mobile.value,
          password : this.password.value
      });
      if(status && status.error)
      {
        this.form.setErrors({
            failed : status.error
        });
      }
      else{
        this._router.navigate(['login'],{queryParams : {username:this.name.value}});
      }
    }
  }

  get name() {
    return this.form.get('name');
  } 
  get mobile() {
    return this.form.get('mobile');
  } 
  get email() {
    return this.form.get('email');
  } 
  get password() {
    return this.form.get('passwordgroup.password');
  } 
  get confirm_password() {
    return this.form.get('passwordgroup.confirm_password');
  } 

  get passwordgroup() {
    return this.form.get('passwordgroup');
  } 


}
