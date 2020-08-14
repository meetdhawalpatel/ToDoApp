import { AuthService, User } from './../../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _authService: AuthService,
              private _activeRoute: ActivatedRoute,
              private _router: Router) { }

  ngOnInit(): void {
    this._activeRoute.queryParams.subscribe(params => {
      console.log(params);
    });

  }

  onSubmit(form: NgForm){
    if (form.invalid)
    {
      form.form.setErrors({error : 'Please provide proper UserName and Password'});
    }
    const result = this._authService.login(form.value.name , form.value.password);
    if (result['error'])
    {
      form.form.setErrors({error : result['error']});
    }
    else
    {
      this._router.navigate(['todo/list']);
    }

  }



}
