import {Component, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';
import {IUser} from '../../interfaces/IUser';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {
  public user: Partial<IUser> = {};

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.initUser(params.userId);
    });
  }

  public initUser(id: string) {
    this.http.get<IUser>(environment.apiUrl + '/users/' + id)
      .subscribe(response => {
        this.user = response;
      });
  }

  public saveUser() {
    this.http.put(environment.apiUrl + '/users/' + this.user._id, this.user)
      .subscribe(response => {
        this.router.navigate(['/users']);
      });

  }

}
