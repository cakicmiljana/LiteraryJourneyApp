import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { User } from 'src/app/models/user';
import { Login } from 'src/app/store/user/user.action';
import { Observable } from 'rxjs';
import { selectUserFeature } from 'src/app/store/user/user.selector';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = "";
  password = "";
  user: Observable<User> | null = null;

  constructor(private store: Store<AppState>, service: UsersService) {

  }

  
  ngOnInit() : void {;
    
    this.user = this.store.select(selectUserFeature);
    this.user.subscribe(user => {
    })
  }

  Login() {
    
    this.store.dispatch(Login({username: this.username, password: this.password}))
  }
}
