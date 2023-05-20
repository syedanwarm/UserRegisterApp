import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../appState/app.state';
import { Observable, of } from 'rxjs';
import { User } from '../model/user.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showError = false;
  email!: string;
  password!: string;
  Users: Observable<User[]>;


  constructor(private store: Store<AppState>, private router: Router) {
    this.Users = this.store.select(state => state.user);
  }

  login(): void {
    const getUser = this.verifyLogin(this.email, this.password);
  }

  verifyLogin(email: string, password: string) {
    const users = this.Users;
    let loggedUser = false;
    this.showError = false;
    users.subscribe(usersList => {
      const userExists = usersList.find(user => user.email === email && user.password === password)
      if (userExists) {
        loggedUser = true;
        this.router.navigate(['/home']);
      }
      else {
        loggedUser = false;
        this.showError = true;
      }
    });
    return of(loggedUser)
  }
}
