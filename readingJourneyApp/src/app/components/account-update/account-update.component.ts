import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms'
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { User } from 'src/app/models/user';
import { updateUserInfo } from 'src/app/store/user/user.action';
import { selectUserFeature } from 'src/app/store/user/user.selector';

@Component({
  selector: 'app-account-update',
  templateUrl: './account-update.component.html',
  styleUrls: ['./account-update.component.scss']
})
export class AccountUpdateComponent {
  user:Observable<User> = of();
  username: FormControl = new FormControl;
  country: FormControl = new FormControl;
  password: FormControl = new FormControl;
  
  constructor(private store: Store<AppState>, private cdr: ChangeDetectorRef) {

  }
  
  ngOnInit() : void {
    this.user = this.store.select(selectUserFeature);
    this.user.subscribe(user => {
      
      this.username = new FormControl<string>(user.username);
      this.country = new FormControl(user.country);
      this.password = new FormControl(user.password);
    })
  }

  saveAccountInfo() {
    this.store.dispatch(updateUserInfo({username: this.username.value, 
      password: this.password.value,
      country: this.country.value}))

      this.cdr.detectChanges();
      event?.preventDefault();
  }
}
