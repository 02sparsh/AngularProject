import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor() { }

  login(username:string, password:string)
  {
    if(username=="admin" && password=="admin")
    {
      localStorage.setItem("loginUser","loggedIn");
      return true;
    }
    return;
  }

  get LoggedIn():boolean{
    return(localStorage.getItem('loginUser')!==null);
  }

  logout(){
    localStorage.removeItem('loginUser');
  }
}
