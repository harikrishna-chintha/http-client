import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';
import { User } from './services/data.service';

@Component({
  selector: 'app-root',
  imports: [],
  providers: [AppService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'http-client';

  users: User[] | undefined;

  constructor(private appService: AppService) {
    this.getUsers();
  }

  getUsers() {
    this.appService.getUsers().subscribe({
      next: data => this.users = data,
      error: err => window.alert(err)
    })
  }

  addUser() {
    this.appService.addUser({name: "Jake", nickName: 'Jake', age: 30}).subscribe({
      next: data => window.alert('added'),
      error: err => window.alert(err)
    })
  }

  updateUser(name: string) {
    this.appService.updateUser({name: name, age: Math.floor(Math.random() * 100)}).subscribe({
      next: data => window.alert('updated'),
      error: err => window.alert(err)
    })
  }

  deleteUser(name: string) {
    this.appService.deleteUser(name).subscribe({
      next: () => this.users = this.users?.filter(user => user.name !== name),
      error: (err: any) => window.alert(err)
    })
  }
}
