import {Component, OnInit, ViewChild, ChangeDetectionStrategy} from '@angular/core';
import { JsonContent } from 'inversify-express-utils';
import {LazyLoadEvent, SortMeta} from 'primeng/api';
import {Table} from 'primeng/table';
import {delay, finalize, mergeMap} from 'rxjs/operators';
import {AppResourceService} from '../../core/api/app.resource';

@Component({
  selector: 'app-role-managment',
  templateUrl: './role-managment.component.html',
  styleUrls: ['./role-managment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoleManagmentComponent implements OnInit {
  userList: any;
  loading = true;
  defaultPageSize = 5;
  multiSortMeta: any;
  spinnerText: any;
  constructor(private service: AppResourceService) { }
  ngOnInit(): void {

  // console.log("localStorage",localStorage.getItem("users"));
  if(localStorage.getItem("users") !== null && localStorage.getItem("users") !== undefined){
    //console.log("sssssss",localStorage.getItem("users"));
      let uList: any = localStorage.getItem("users");
      this.loading = false;
      this.userList = JSON.parse(uList);
    } 

  this.service.getQueryDef("test").subscribe((users) => {
    // console.log("user",users)
      this.userList = (users);
      this.loading = false;
      localStorage.setItem('users', JSON.stringify(this.userList));
  });


  }



  @ViewChild(Table, {static: true}) table: any;

  private recentSort: string[] = [];
 

  now() {
      return Date.now();
  }

  getSortIndex(field: string): string {
      if (this.recentSort.length < 2) {
          return '';
      }
      const idx = this.recentSort.findIndex((f) => f === field);
      return idx === -1 ? '' : (idx + 1).toString();
  }

  load(event?: LazyLoadEvent|undefined) {
      if (!event) {
          event = this.table.createLazyLoadMetadata();
      }
      let sort: any;
      if (event &&event.multiSortMeta) {
          sort = event.multiSortMeta.map<any>((ms) => ({
              field: ms.field,
              order: ms.order === 1 ? 'asc' : 'desc'
          }));
      }
      this.recentSort = sort.map((item: any) => item.field);
      const addOnFilter = (prop: string) => (event && event.filters && event.filters[prop]
          ? event.filters[prop].value : undefined);
      const query: any = {
          size: event && event.rows,
          page: 2,
          sort,
          uploadedFileName: addOnFilter('uploadedFileName')
      };
      setTimeout(() => {
          this.spinnerText = 'Loading Data...';
          this.loading = true;
      });
   
  }
}

