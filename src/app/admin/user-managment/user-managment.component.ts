import {Component, OnInit, ViewChild, ChangeDetectionStrategy} from '@angular/core';
import { JsonContent } from 'inversify-express-utils';
import {Table} from 'primeng/table';
import {delay, finalize, mergeMap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {AppResourceService} from '../../core/api/app.resource';
import { AdminService } from '../services/admin.service';
import {ConfirmationService, Message,PrimeNGConfig,LazyLoadEvent, SelectItem, MessageService, SortMeta } from 'primeng/api';
// import {Message} from 'primeng/api';
// import { PrimeNGConfig } from 'primeng/api'; 
import { apis } from 'src/app/core/api/api-calls';
import { ProductService } from './productservice';
import { Product } from './product';
// import { LazyLoadEvent } from 'primeng/api';
// import { SelectItem } from 'primeng/api';
// import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-user-managment',
  templateUrl: './user-managment.component.html',
  styleUrls: ['./user-managment.component.scss'],
  providers: [MessageService]
})
export class UserManagmentComponent implements OnInit {

  products1: Product[];

    products2: Product[];

    statuses: SelectItem[];

    clonedProducts: { [s: string]: Product; } = {};

    constructor(private productService: ProductService, private messageService: MessageService) { }

    ngOnInit() {
        this.productService.getProductsSmall().then(data => this.products1 = data);
        this.productService.getProductsSmall().then(data => this.products2 = data);

        this.statuses = [{label: 'In Stock', value: 'INSTOCK'},{label: 'Low Stock', value: 'LOWSTOCK'},{label: 'Out of Stock', value: 'OUTOFSTOCK'}]
    }

    onRowEditInit(product: Product) {
        if(product.id)
          this.clonedProducts[product.id] = {...product};
    }

    onRowEditSave(product: Product) {
        if (product.price && product.id && product.price > 0) {
            delete this.clonedProducts[product.id];
            this.messageService.add({severity:'success', summary: 'Success', detail:'Product is updated'});
        }  
        else {
            this.messageService.add({severity:'error', summary: 'Error', detail:'Invalid Price'});
        }
    }

    onRowEditCancel(product: Product, index: number) {
      if(product && product.id)
          this.products2[index] = this.clonedProducts[product.id];
          if(product && product.id){
            // delete this.products2[product.id];
          }
    }
}
