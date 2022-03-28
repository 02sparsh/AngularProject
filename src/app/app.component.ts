import { Component } from '@angular/core';
import { AuthserviceService } from './authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angproject';

  username:string='';
  password:string='';
  constructor(private auth:AuthserviceService, public router:Router){
    if(this.auth.LoggedIn)
    {
      this.router.navigate(['auth']);
    }
  }
  login()
  {
    if(this.username!='' && this.password!='')
    {
      if(this.auth.login(this.username,this.password))
      {
        this.router.navigate(['auth']);
      }
      else
      {
        alert("Wrong Credentials");
      }
    }
    else{
      alert("Please input username and password");
    }
  }
  ngOnInit():void{

  }
}
