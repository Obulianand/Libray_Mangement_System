import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { userBookData, userData } from '../books';
import { NavbarService } from '../services/navbar.service';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  useremail: string;
  userpass: string;
  userData: userData;
  userBookData: userBookData[];

  constructor(
    private router: Router,
    private navbarService: NavbarService,
    private bookService: BooksService
  ) { }


  ngOnInit() {
    this.navbarService.hide();
    this.userData = this.bookService.userData;
    this.userBookData = this.bookService.userBookData;

    localStorage.setItem("userData", JSON.stringify(this.userData));
    if (!localStorage.getItem("userBookData"))
      localStorage.setItem("userBookData", JSON.stringify(this.userBookData));
  }

  handleLogin() {
    if (this.useremail == "anand@gmail.com" && this.userpass == "anand@123") {
      this.router.navigate(['dashboard'])
    } else if (this.useremail == "admin@gmail.com" && this.userpass == "Admin@123") {
      this.router.navigate(['admin'])
    } else {
      alert("Invalid user");
    }
  }
  
  ngOnDestroy() {
    this.navbarService.display();
  }
}
