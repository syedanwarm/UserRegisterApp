import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../appState/app.state';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  displayedColumns: string[] = ['name', 'email'];
  Users: Observable<User[]>;

  constructor(private store: Store<AppState>, private router: Router) {
    this.Users = this.store.select(state => state.user);
  }

  logOut(): void {
    this.store.dispatch({ type: 'LOGOUT_USER' });
    this.router.navigate(['/login']);
  }

}
