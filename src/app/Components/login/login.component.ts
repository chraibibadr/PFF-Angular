import { Component, OnInit } from '@angular/core';
import{ LoginService} from '../../Services/Login/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  constructor(private loginService:LoginService) {}

  ngOnInit() {
  }

  login(e){
    e.preventDefault();
      console.log(this.username,this.password);
  };

}
