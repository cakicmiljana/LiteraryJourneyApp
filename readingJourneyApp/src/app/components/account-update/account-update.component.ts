import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms'
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-account-update',
  templateUrl: './account-update.component.html',
  styleUrls: ['./account-update.component.scss']
})
export class AccountUpdateComponent {
  user: User = {
    "id": 0,
    "username": "greg",
    "password": "boo",
    "country": "UK"
  };

  username = new FormControl(this.user.username);
  country = new FormControl(this.user.country);
  password = new FormControl(this.user.password);

  saveAccountInfo() {
    this.user = {
      ...this.user
    }
  }
}
