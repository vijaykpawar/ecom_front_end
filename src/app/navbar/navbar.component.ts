import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';
import { Router } from '@angular/router';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor( public nav: NavbarService ,private router: Router) {

  }

  checkout(){
    this.nav.checkout();
  }

  ngOnInit() {
  }


  logout(){
    this.nav.setLoggedIn(false);
    sessionStorage.removeItem("isLoggedIn");
    localStorage.clear();
    this.router.navigate(['/home']);
  }
}
