import { Injectable } from '@angular/core';
import { Headers, Response, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Configuration } from '../../../../configuration';

export class User {
  username: string;
  token: AuthToken;
}

export class AuthToken {
  token_type: string;
  access_token: string;
  expires_in: number;
}

@Injectable()
export class AuthenticationService {
  private currentUser: User;

  // this is the only place where the basic Http service should be used (circular dependecy)
  constructor(private http: Http) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  isLoggedIn() {
    return !!this.currentUser;
  }

  getUser() {
    return this.currentUser;
  }

  register(username: string, password: string) {
    // Can't use UrlSearchParams because of IE10-11
    const body = `Username=${username}&Password=${password}&ConfirmPassword=${password}`;

    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(Configuration.apiBaseUrl + '/api/Account/Register', body, { headers: headers });
  }

  login(username: string, password: string): Observable<boolean> {
    if (Configuration.fakeLogin) {
      localStorage.setItem('currentUser', JSON.stringify({ username: username, token: 'faketoken' }));
      return Observable.of(true);
    } else {
      return this.getToken(username, password)
        .map((response: Response) => {
          // login successful if there's a jwt token in the response
          const token = response.json();
          if (token) {
            // set token property
            this.currentUser = { username: username, token: token };

            // store username and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(this.currentUser));

            // return true to indicate successful login
            return true;
          } else {
            // return false to indicate failed login
            return false;
          }
        });
    }
  }

  private getToken(username: string, password: string) {
    // Can't use UrlSerachParams because of IE10-11
    const body = `grant_type=password&Username=${username}&Password=${password}`;

    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(Configuration.apiBaseUrl + '/token', body, { headers: headers });
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    this.currentUser = null;
    localStorage.removeItem('currentUser');
  }
}
