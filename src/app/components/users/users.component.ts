import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {IUser} from '../../interfaces/IUser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public loading = false;
  public users: IUser [] = [];

  constructor(
    private http: HttpClient
  ) {
  }

  ngOnInit() {
    this.getUsers();
  }

  public getUsers() {
    this.loading = true;
    this.http.get<IUser[]>(environment.apiUrl + '/users')
      .subscribe(response => {
        this.users = response;
        this.loading = false;
      });
  }

  public deleteUser(id) {
    this.http.delete(environment.apiUrl + '/users/' + id)
      .subscribe(_ => {
        this.getUsers();
      });
  }


}
