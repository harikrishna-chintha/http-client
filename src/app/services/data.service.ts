import { Injectable } from '@angular/core';
import { delay, Observable, of, throwError } from 'rxjs';

export interface User { name: string, age: number, nickName: string }

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: User[] = [
    {name: 'Hari krishna', age: 30, nickName: 'Krishna'},
    {name: 'Hemalatha', age: 30, nickName: 'Hema'},
    {name: 'Sahasra', age: 0.4, nickName: 'Saha'},
    {name: 'Harish', age: 32, nickName: 'Hari'},
    {name: 'Venu', age: 28, nickName: 'Venu'},
  ]

  getUsers(): Observable<User[]> {
    if(Math.random() < 0.5) { // 50% success rate
      return throwError(() => new Error('API failed as something went wrong')).pipe(delay(500))
    }
    return of(this.users).pipe(delay(500));
  }

  addUsers(user: User) {
    if(Math.random() < 0.5) {
      return throwError(() => new Error('API failed as something went wrong')).pipe(delay(500))
    }
    this.users.push(user);
    return of(user).pipe(delay(500));
  }

  updateUsers(updatedUser: Partial<User>) {
    if(Math.random() < 0.5) {
      return throwError(() => new Error('API failed as something went wrong')).pipe(delay(500))
    }

    const user = this.users.find(user => user.name === updatedUser.name);
    user!.name = updatedUser.name ?? user!.name;
    user!.age = updatedUser.age ?? user!.age;
    user!.nickName = updatedUser.nickName ?? user!.nickName;

    return of(user).pipe(delay(500));
  }

  deleteUsers(name: string) {
    if(Math.random() < 0.5) {
      return throwError(() => new Error('API failed as something went wrong')).pipe(delay(500))
    }

    this.users.splice(this.users.findIndex((user: User) => user.name === name), 1);
    return of({}).pipe(delay(500));
  }
}
