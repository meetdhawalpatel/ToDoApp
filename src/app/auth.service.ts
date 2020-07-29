import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  allUsers : User[];
  constructor() { 
    let allUsersString = localStorage.getItem("users");
    if(allUsersString)
    {
      this.allUsers = JSON.parse(allUsersString);
    }
    else
    {
      this.allUsers = new Array<User>();
    }
  }

  registor(user : User)
  {
    let alreadyExist : boolean = false;
    this.allUsers.forEach(element => {
      if(element.name === user.name) 
        alreadyExist = true;
    });

    if(alreadyExist)
    {
      return {error : "User Already Exist"}
    }

    this.allUsers.push(user);
    this._updateStorage();
  }

  _updateStorage()
  {
    let jsonString = JSON.stringify(this.allUsers);
    localStorage.setItem("users",jsonString);
  }

}

interface User
{
  name : string,
  mobile: string,
  email: string,
  password: string
}
