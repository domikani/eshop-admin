import {Component, OnInit} from '@angular/core';
import {IProduct} from '../../interfaces/IProduct';
import {ICategory} from '../../interfaces/ICategory';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {IResponse} from 'src/app/interfaces/IResponse';


@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {

  public product: Partial<IProduct> = {};
  public categories: ICategory[] = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.getCategories();

    this.route.params.subscribe(params => {
      this.initProduct(params.productId);
    });
  }

  public onUploadSuccess(data) {
    this.product.photo = data[1].filename;
  }

  public onUploadError(data) {
    console.log('ERROR: ', data);
  }

  // Gallery
  public onUploadGallerySuccess(data) {
    if (!this.product.gallery) {
      this.product.gallery = [];
    }
    this.product.gallery.push(data[1].filename);
  }

  public removeFromGallery(i) {
    this.product.gallery.splice(i, 1);
  }


  public initProduct(id: string) {
    this.http.get<IProduct>(environment.apiUrl + '/products/' + id)
      .subscribe(response => {
        this.product = response;

      });

  }

  public saveProduct() {
    this.http.put(environment.apiUrl + '/products/' + this.product._id, this.product)
      .subscribe(response => {
        this.router.navigate(['/products']);
      });
  }

  public getCategories() {
    this.http.get<ICategory[]>(environment.apiUrl + '/categories')
      .subscribe(response => {
        this.categories = response;
      });
  }

}
