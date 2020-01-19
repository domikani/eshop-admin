import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ProductsComponent} from './components/products/products.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ProductCreateComponent} from './components/product-create/product-create.component';
import {ProductUpdateComponent} from './components/product-update/product-update.component';
import {CategoriesComponent} from './components/categories/categories.component';
import {CategoryCreateComponent} from './components/category-create/category-create.component';
import {CategoryUpdateComponent} from './components/category-update/category-update.component';
import {UsersComponent} from './components/users/users.component';
import {UserCreateComponent} from './components/user-create/user-create.component';
import {UserUpdateComponent} from './components/user-update/user-update.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { DepartmentCreateComponent } from './components/department-create/department-create.component';
import { DepartmentUpdateComponent } from './components/department-update/department-update.component';

const routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'products',
    children: [
      {
        path: '',
        component: ProductsComponent
      },
      {
        path: 'create',
        component: ProductCreateComponent
      },
      {
        path: 'update/:productId',
        component: ProductUpdateComponent
      }
    ]
  },
  {
    path: 'categories',
    children: [
      {
        path: '',
        component: CategoriesComponent
      },
      {
        path: 'create',
        component: CategoryCreateComponent
      },
      {
        path: 'update/:categoryId',
        component: CategoryUpdateComponent
      }

    ]
  },
  {
    path: 'users',
    children: [
      {
        path: '',
        component: UsersComponent
      },
      {
        path: 'create',
        component: UserCreateComponent
      },
      {
        path: 'update/:userId',
        component: UserUpdateComponent
      },

    ]
  },
  {
    path: 'departments',
    children: [
      {
        path: '',
        component: DepartmentsComponent
      },
      {
        path: 'create',
        component: DepartmentCreateComponent
      },
      {
        path: 'update/:departmentId',
        component: DepartmentUpdateComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    ProductsComponent,
    ProductCreateComponent,
    ProductUpdateComponent,
    CategoriesComponent,
    CategoryCreateComponent,
    CategoryUpdateComponent,
    UsersComponent,
    UserCreateComponent,
    UserUpdateComponent,
    DepartmentsComponent,
    DepartmentCreateComponent,
    DepartmentUpdateComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
