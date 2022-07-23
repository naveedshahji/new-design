import {Component, OnInit, ViewChild, ChangeDetectionStrategy} from '@angular/core';
import { JsonContent } from 'inversify-express-utils';
import {Table} from 'primeng/table';
import {delay, finalize, mergeMap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {ConfirmationService, Message,PrimeNGConfig,LazyLoadEvent, SelectItem, MessageService, SortMeta } from 'primeng/api';


@Component({
  selector: 'app-user-managment',
  templateUrl: './user-managment.component.html',
  styleUrls: ['./user-managment.component.scss'],
  providers: [MessageService]
})
export class UserManagmentComponent implements OnInit {

 

    constructor(private messageService: MessageService) { }

    ngOnInit() {
       // this.productService.getProductsSmall().then(data => this.products1 = data);
       // this.productService.getProductsSmall().then(data => this.products2 = data);

        //this.statuses = [{label: 'In Stock', value: 'INSTOCK'},{label: 'Low Stock', value: 'LOWSTOCK'},{label: 'Out of Stock', value: 'OUTOFSTOCK'}]
    }

  
}
