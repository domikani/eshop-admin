import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {IDepartment} from '../../interfaces/IDepartment';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-department-update',
  templateUrl: './department-update.component.html',
  styleUrls: ['./department-update.component.scss']
})
export class DepartmentUpdateComponent implements OnInit {
  public department: Partial<IDepartment> = {};

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.initDepartment(params.departmentId);
    });
  }

  public initDepartment(id: string) {
    this.http.get<IDepartment>(environment.apiUrl + '/departments/' + id)
      .subscribe(response => {
        this.department = response;
      });
  }

  public saveDepartment() {
    this.http.put(environment.apiUrl + '/departments/' + this.department._id, this.department)
      .subscribe(response => {
        this.router.navigate(['/departments']);
      });
  }

}
