import { Component, OnInit } from '@angular/core';
import{ LoginService} from '../../Services/Login/login.service'
import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  constructor(private loginService:LoginService , private router : Router) {}

  ngOnInit() {
  }

  login(e){
    e.preventDefault();
    console.log(this.username,this.password);
    if(this.username == undefined && this.password == undefined)
    {
      alert('Saisie dabord vos informations');  
    }
    else
    {
      if(this.username == "galaxiOuss" && this.password == "123")
      this.router.navigateByUrl("guest-home");
      
    else if(this.username == "admin" && this.password == "admin")
      this.router.navigateByUrl("admin-home");
    else
      alert('Username ou Password est erronée');
    }
  };

}
