import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';
  USER_NAME_SESSION_ATTRIBUTE_PASSWORD = 'authenticatedPassword';
  private basicUrl = environment.apiUrl + 'login';

  public username: String;
  public password: String;

  isConnected: Subject<boolean> = new Subject();

  constructor(private httpClient: HttpClient) { }

  login(username: String, password: String) {
    return this.httpClient
      .get(this.basicUrl, {
        headers: {
          authorization: this.createBasicAuthToken(username, password),
        },
      })
      .pipe(
        map((res) => {
          this.username = username;
          this.password = password;
          this.registerSuccessfulLogin(username, password);
        })
      );
  }

  createBasicAuthToken(username: String, password: String) {
    return 'Basic ' + window.btoa(username + ':' + password);
  }

  registerSuccessfulLogin(username, password) {
    this.isConnected.next(true);
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username);
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_PASSWORD, password);
  }

  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_PASSWORD);
    this.username = null;
    this.password = null;
    this.isConnected.next(false);
  }

  isUserLoggedIn() {
    return (
      sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME) !== null &&
      sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_PASSWORD) !== null
    );
  }

  getLoggedInUserName() {
    return (
      sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME) === null ??
      ''
    );
  }
}
