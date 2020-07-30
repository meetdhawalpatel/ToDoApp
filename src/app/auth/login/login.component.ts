import { AuthService, User } from './../../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _authService : AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log(form)
    if(form.invalid)
    {
      form.form.setErrors({error : "Please provide proper UserName and Password"});
    }
    let result = this._authService.login(form.value.name ,form.value.password);
    if(result['error'])
    {
      form.form.setErrors({error : result['error']});
    }
    else
    {
      form.form.setErrors({success : 'user logged in '+ (result as User).name});
    }

  }



}
