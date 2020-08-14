import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  allUsers: User[];
  constructor() {
    const allUsersString = localStorage.getItem('users');
    if (allUsersString)
    {
      this.allUsers = JSON.parse(allUsersString);
    }
    else
    {
      this.allUsers = new Array<User>();
    }
  }

  registor(user: User)
  {
    let alreadyExist = false;
    this.allUsers.forEach(element => {
      if (element.name === user.name) {
        alreadyExist = true;
      }
    });

    if (alreadyExist)
    {
      return {error : 'User Already Exist'};
    }

    this.allUsers.push(user);
    this._updateStorage();
  }

  login(username: string, password: string): User | {error: string}
  {
    let user: User;
    this.allUsers.forEach(element => {
      if (element.name === username && element.password === password) {
        user = element;
      }
    });
    if (user)
    {
      localStorage.setItem('auth',JSON.stringify(user));
      return user;
    }
    return {error : 'Invalid username or password'};
  }

  isAuthneticated() : boolean
  {
    var user = localStorage.getItem("auth");
    if(user)
    {
      return true;
    }
    return false;

  }
  _updateStorage()
  {
    const jsonString = JSON.stringify(this.allUsers);
    localStorage.setItem('users', jsonString);
  }

}

export interface User
{
  name: string;
  mobile: string;
  email: string;
  password: string;
}
