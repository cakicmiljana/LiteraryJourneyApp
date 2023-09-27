import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { 

  }

  getAllUsers() {
    return this.httpClient.get<User[]>("http://localhost:3000/users")
  }

  getUserById(id: number) {
    return this.httpClient.get<User>(`http://localhost:3000/users/${id}`)
  }
}
