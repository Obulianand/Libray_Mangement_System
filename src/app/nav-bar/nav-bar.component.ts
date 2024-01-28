import { Component } from '@angular/core';
import { NavbarService } from '../services/navbar.service';
import { Subscription } from 'rxjs';
import { userData } from '../books';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  showNavbar: boolean = true;
  subscription: Subscription;
  userData: userData;
  constructor(private navbarService: NavbarService) {
    this.subscription = this.navbarService.showNavbar.subscribe((data) => (
      this.showNavbar = data
    ));
  }
  ngOnInit() {
    let data = localStorage.getItem('userData');
    console.log(data);
    if (data)
      this.userData = JSON.parse(data);

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
