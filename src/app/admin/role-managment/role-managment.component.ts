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

  //TODO:ALL any type will be changed to type 
  userList: any;
  selectedRole: any;
  nm:any;
  lbl:any;
  desc:any;
  nml:any;
  lbll:any;
  descl:any;
  ID:any;
  nameUp:boolean = false;
  labelUp:boolean = false;
  isEdit : boolean = false;
  loading = true;
  defaultPageSize = 5;
  multiSortMeta: SortMeta[] = [
    {field: 'name', order: -1}
  ];
  spinnerText: any;
  constructor(private service: AppResourceService) { }
  ngOnInit(): void {
    this.isEdit = false;
    this.ID = "";
   // const x = [{"id":45,"name":"nshah","label":"admin","description":"This role enables the user to see new Angular UI ","permissions":[]},{"id":51,"name":"nshah0","label":"admin","description":"This role enables the user to see new Angular UI","permissions":[]},{"id":53,"name":"nshah1","label":"admin","description":"This role enables the user to see new Angular UI","permissions":[]},{"id":54,"name":"nshah2","label":"admin","description":"This role enables the user to see new Angular UI","permissions":[]},{"id":55,"name":"nshah3","label":"admin","description":"This role enables the user to see new Angular UI","permissions":[]},{"id":56,"name":"nshah4","label":"admin","description":"This role enables the user to see new Angular UI","permissions":[]},{"id":57,"name":"nshah5","label":"admin","description":"This role enables the user to see new Angular UI","permissions":[]},{"id":58,"name":"nshah6","label":"admin","description":"This role enables the user to see new Angular UI","permissions":[]}];
   // localStorage.setItem('users', JSON.stringify(x));
  // console.log("localStorage",localStorage.getItem("users"));
  //[{"id":45,"name":"nshah","label":"admin","description":"This role enables the user to see new Angular UI ","permissions":[]},{"id":51,"name":"nshah0","label":"admin","description":"This role enables the user to see new Angular UI","permissions":[]},{"id":53,"name":"nshah1","label":"admin","description":"This role enables the user to see new Angular UI","permissions":[]},{"id":54,"name":"nshah2","label":"admin","description":"This role enables the user to see new Angular UI","permissions":[]},{"id":55,"name":"nshah3","label":"admin","description":"This role enables the user to see new Angular UI","permissions":[]},{"id":56,"name":"nshah4","label":"admin","description":"This role enables the user to see new Angular UI","permissions":[]},{"id":57,"name":"nshah5","label":"admin","description":"This role enables the user to see new Angular UI","permissions":[]},{"id":58,"name":"nshah6","label":"admin","description":"This role enables the user to see new Angular UI","permissions":[]}]
  if(localStorage.getItem("users") !== null && localStorage.getItem("users") !== undefined){
    //console.log("sssssss",localStorage.getItem("users"));
      let uList: any = localStorage.getItem("users");
      this.loading = false;
      this.userList = JSON.parse(uList);
    } 

  // this.service.getQueryDef("test").subscribe((users) => {
  //   // console.log("user",users)
  //     this.userList = (users);
  //     this.loading = false;
  
  // });

  this.service.getFiles().subscribe((users) => {
      console.log("user",users)
      // this.userList = (users);
      // this.loading = false;
      // localStorage.setItem('users', JSON.stringify(this.userList));
  });

    
  //this.userList = [{"id":45,"name":"nshah","label":"admin","description":"This role enables the user to see new Angular UI ","permissions":[]},{"id":51,"name":"nshah0","label":"admin","description":"This role enables the user to see new Angular UI","permissions":[]},{"id":53,"name":"nshah1","label":"admin","description":"This role enables the user to see new Angular UI","permissions":[]},{"id":54,"name":"nshah2","label":"admin","description":"This role enables the user to see new Angular UI","permissions":[]},{"id":55,"name":"nshah3","label":"admin","description":"This role enables the user to see new Angular UI","permissions":[]},{"id":56,"name":"nshah4","label":"admin","description":"This role enables the user to see new Angular UI","permissions":[]},{"id":57,"name":"nshah5","label":"admin","description":"This role enables the user to see new Angular UI","permissions":[]},{"id":58,"name":"nshah6","label":"admin","description":"This role enables the user to see new Angular UI","permissions":[]}];
  
  }

  getSortIndex(field: string): any {
    //console.log("user list", field)
    if(field ==='name'){
      this.nameUp = !this.nameUp;
       this.userList.sort((a:any,b:any) => a.name.toLowerCase() > b.name.toLowerCase() ? (this.nameUp?-1:1) : (this.nameUp?1:-1));
    } else {
      this.labelUp = !this.labelUp;
     //  this.userList.sort((a:any,b:any) => a.label.toLowerCase() > b.label.toLowerCase() ? (this.labelUp?-1:1) : (this.labelUp?1:-1));
    }
    return;
     // console.log("user lst", this.userList)
  }

  create(){
    //console.log("aaaaa", this.nm)
    if(!this.isEdit){
        const newUser = {"id":1+this.userList.length+this.nm,"name":this.nm,"label":this.lbl,"description":this.desc,"permissions":[]};
        this.userList.unshift(newUser);
    } else {
      this.userList = this.userList.map((list:any) => {
        if (list.id === this.ID) {
          return {...list, name: this.nm, label: this.lbl, description: this.desc};
        }
        return list;
      });
      // const index = this.userList.findIndex((object:any) => {
      //   return object.id === this.ID;
      // });
      
      // if (index !== -1) {
      //   this.userList[index].name = this.nm;
      //   this.userList[index].label = this.lbl;
      //   this.userList[index].description = this.desc;
      // }
    }
    localStorage.setItem('users', JSON.stringify(this.userList));
    this.nm = "";
    this.lbl = "";
    this.desc = "";
    this.ID = "";
    this.isEdit = false;
  }

  delete(id:any){

    this.userList = this.userList.filter((x: any) => {
      return x.id != id;
    })
    localStorage.setItem('users', JSON.stringify(this.userList));
  }

  edit(id:any){
    this.selectedRole = this.userList.filter((x: any) => {
      return x.id === id;
    });
    this.isEdit = true;
    this.nm = this.selectedRole[0].name;
    this.lbl = this.selectedRole[0].label;
    this.desc = this.selectedRole[0].description;
    this.ID = this.selectedRole[0].id
    console.log("selected Role",this.selectedRole);
  }

  loadData(id:any){
    this.selectedRole = this.userList.filter((x: any) => {
      return x.id === id;
    });
    this.nml = this.selectedRole[0].name;
    this.lbll = this.selectedRole[0].label;
    this.descl = this.selectedRole[0].description;
  }


  @ViewChild(Table, {static: true}) table: any;

  private recentSort: string[] = [];
 

  now() {
      return Date.now();
  }

  // getSortIndex(field: string): string {
  //     if (this.recentSort.length < 2) {
  //         return '';
  //     }
  //     const idx = this.recentSort.findIndex((f) => f === field);
  //     return idx === -1 ? '' : (idx + 1).toString();
  // }

  load(event?: LazyLoadEvent|undefined) {
      // if (!event) {
      //     event = this.table.createLazyLoadMetadata();
      // }
      // let sort: any;
      // if (event &&event.multiSortMeta) {
      //     sort = event.multiSortMeta.map<any>((ms) => ({
      //         field: ms.field,
      //         order: ms.order === 1 ? 'asc' : 'desc'
      //     }));
      // }
      // this.recentSort = sort.map((item: any) => item.field);
      // const addOnFilter = (prop: string) => (event && event.filters && event.filters[prop]
      //     ? event.filters[prop].value : undefined);
      // const query: any = {
      //     size: event && event.rows,
      //     page: 2,
      //     sort,
      //     uploadedFileName: addOnFilter('uploadedFileName')
      // };
      setTimeout(() => {
          this.spinnerText = 'Loading Data...';
          this.loading = true;
      });
   
  }
}

