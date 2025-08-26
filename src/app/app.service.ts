import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService, User } from './services/data.service';
import { catchError, map, throwError } from 'rxjs';

@Injectable()
export class AppService {

  constructor(private dataService: DataService) { }

  getUsers() {
    return this.dataService.getUsers().pipe(
      // transforms and return observable, so it still need 'subscription'
      map((users) => users.map(user => user = {...user, name: 'Mr. '+user.name})),
      catchError(() => throwError(() => new Error('something wrong happened, please try again') ))
    )
  }

  addUser(user: User) {
    return this.dataService.addUsers(user)
  }

  updateUser(user: Partial<User>) {
    return this.dataService.updateUsers(user);
  }

  deleteUser(name: string) {
    return this.dataService.deleteUsers(name)
  }
}
