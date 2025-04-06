import { HttpClient } from '@angular/common/http';``
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) {

  }

  getAllUsers() {
    return this.httpClient.get<User[]>(environment.api + "/users")
  }

  getUserById(id: number) {
    return this.httpClient.get<User>(environment.api + `/users/${id}`)
  }

  saveUser(userId: number) {
    return this.httpClient.post(environment.api + "/users/" + userId, {});
  }

  loginUser(username: string, password: string) {
    return this.httpClient.get<User[]>(
      environment.api + '/users' + `?username=${username}&password=${password}`
    ).pipe(
      map((users) => {
        return users[0]
      })
    )
  }

  signUpUser(user: User) {
    return this.httpClient.post<User>(
      environment.api + "/users", user)
  }
}
