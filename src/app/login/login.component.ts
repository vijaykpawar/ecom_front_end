import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from '../navbar.service';
import { LoginService } from '../login.service';
import { User } from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:any={};
  constructor(private router: Router,
    private nav:NavbarService,private loginSer:LoginService) { }

ngOnInit() {
    this.nav.hide();
  }

  register() {
    const answer = confirm('Are you sure you want to logout?');
    if (answer) {
      sessionStorage.removeItem('login_status');
      this.router.navigate(['/register']);
    }
  }

  login(){
    try {
      let res=this.loginSer.isValidUser(this.user) ;
      res.subscribe((data)=>{
        if(data !=null && data!=""){
         data=JSON.parse(data);
          this.nav.show();
          this.nav.setLoggedIn(true);
          localStorage.setItem("login_status","true");
          
          localStorage.setItem("sessionToken",""+data['sessionToken']);
          this.router.navigate(['/home']);
        }else{
          alert("Please enter valid username password");
        }
      
      },(err)=>{
        alert(JSON.stringify(err));
        alert("Error While calling REST service");
      })
    } catch (error) {
      alert(error);
    }
  }

}
