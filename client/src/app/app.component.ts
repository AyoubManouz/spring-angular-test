import { Component } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';
registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isConnected: boolean = false;

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {
      this.loginService.isConnected.subscribe(
        data => this.isConnected = data
      );
      this.loginService.isConnected.next(this.loginService.isUserLoggedIn());
  }

  logout() {
      this.loginService.logout();
      this.router.navigate(['/login']);
  }
}
