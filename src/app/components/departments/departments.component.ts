import {Component, OnInit} from '@angular/core';
import {environment} from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {
  public departments = [];
  public loading: boolean = false;

  constructor(
    private http: HttpClient
  ) {
  }

  ngOnInit() {
    this.getDepartments();
  }

  public getDepartments() {
    this.loading = true;
    this.http.get(environment.apiUrl + '/departments')
      .subscribe(response => {
        this.departments = response;
        this.loading = false;
      });
  }

  public deleteDepartment(id) {
    this.http.delete(environment.apiUrl + '/departments/' + id)
      .subscribe(_ => {
        this.getDepartments();
      });
  }
}

