import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isLoggedIn: boolean = false;

  constructor(public authService: AuthService){}

  login() {
    this.authService.login();
    this.isLoggedIn = true;
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
  }
  
}
