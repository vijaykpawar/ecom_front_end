import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  firstName='';
  lastName='';
  username='';
  email='';
  password='';
  phone='';
  

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onCancel() {
    this.router.navigate(['/login']);
  }

  onregister(){
    if (this.firstName.length === 0) {
      alert('enter first name');
    } else if (this.lastName.length === 0) {
      alert('enter last name');
    } else if (this.username.length === 0) {
      alert('enter user name');
    } else if (this.email.length === 0) {
      alert('enter email');
    } else if (this.password.length === 0) {
        alert('enter password');
    } else if (this.phone.length === 0) {
      alert('enter phone');
    } else 
    {
      this.userService
        .register(this.firstName,this.lastName,this.username, this.email, this.password, this.phone)
        .subscribe(response => {
        if(response){
          alert("Registration successfull, Please login with credentials.")
          this.router.navigate(['/login']);
        }
          

        });
    }
  }
}
