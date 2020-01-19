import {Component, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';
import {IDepartment} from '../../interfaces/IDepartment';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-department-create',
  templateUrl: './department-create.component.html',
  styleUrls: ['./department-create.component.scss']
})
export class DepartmentCreateComponent implements OnInit {
  public department: Partial<IDepartment> = {};

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
  }

  ngOnInit() {
  }

  public saveDepartment(){
    this.http.post(environment.apiUrl + '/departments', this.department)
      .subscribe(response => {
        this.router.navigate(['/departments']);
      });
  }

}
