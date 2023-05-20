import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../appState/app.state';
import { User } from '../model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  email!: string;
  username!: string;
  password!: string;
  showError = false;

  constructor(private store: Store<AppState>, private router: Router) { }

  register() {
    if (this.email && this.password && this.username) {
      this.showError = false;
      this.store.dispatch({
        type: 'REGISTER_USER',
        payload: <User>{
          name: this.username, email: this.email, password: this.password
        }
      });
      this.router.navigate(['/login']);
    }
    else {
      this.showError = true;
    }

  };
}
