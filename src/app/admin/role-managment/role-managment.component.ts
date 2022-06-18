import {Component, OnInit, ViewChild, ChangeDetectionStrategy} from '@angular/core';
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
  constructor(private service: AppResourceService) { }
  ngOnInit(): void {
    const uploadedFileList: any = {
      "links" : [ ],
      "content" : [ {
        "id" : 1,
        "snapshotDate" : "2007-02-28T00:00:00.000-0500",
        "targetSchema" : "Loan",
        "deleted" : false,
        "exceptions" : 5,
        "changes" : 10,
        "uploadComment" : "",
        "reviewedComment" : null,
        "uploadedBy" : "Mike",
        "uploadTime" : "2022-05-20T07:08:41.595-0400",
        "reviewedBy" : null,
        "reviewedTime" : null,
        "submittedBy" : null,
        "submittedTime" : null,
        "fileName" : "sample File.xlsx",
        "postingDate" : "2007-02-28T00:00:00.000-0500",
        "filePath" : "/share/proxy/alfresco/api/node/content/workspace/SpacesStore/3d355cee-1deb-49cb-a845-929207f28664/manage_nobre_sda_append_20070228_dafb6913ba4d4967b491aa3c831e6bcb.xlsx",
        "uploadedFileName" : "sample File.xlsx",
        "reviewTimeStamp" : null,
        "reviewComments" : null,
        "uploadedFilePath" : "/share/proxy/alfresco/api/node/content/workspace/SpacesStore/3d355cee-1deb-49cb-a845-929207f28664/manage_nobre_sda_append_20070228_dafb6913ba4d4967b491aa3c831e6bcb.xlsx",
        "status" : "Initial Processing Completed",
        "comments" : ""
      }, {
        "id" : 2,
        "snapshotDate" : "2007-02-28T00:00:00.000-0500",
        "targetSchema" : "Loan",
        "deleted" : false,
        "exceptions" : 5,
        "changes" : 10,
        "uploadComment" : "",
        "reviewedComment" : null,
        "uploadedBy" : "Mike",
        "uploadTime" : "2022-05-20T07:08:41.595-0400",
        "reviewedBy" : null,
        "reviewedTime" : null,
        "submittedBy" : null,
        "submittedTime" : null,
        "fileName" : "sample File.xlsx",
        "postingDate" : "2007-02-28T00:00:00.000-0500",
        "filePath" : "/share/proxy/alfresco/api/node/content/workspace/SpacesStore/3d355cee-1deb-49cb-a845-929207f28664/manage_nobre_sda_append_20070228_dafb6913ba4d4967b491aa3c831e6bcb.xlsx",
        "uploadedFileName" : "sample File.xlsx",
        "reviewTimeStamp" : null,
        "reviewComments" : null,
        "uploadedFilePath" : "/share/proxy/alfresco/api/node/content/workspace/SpacesStore/3d355cee-1deb-49cb-a845-929207f28664/manage_nobre_sda_append_20070228_dafb6913ba4d4967b491aa3c831e6bcb.xlsx",
        "status" : "Initial Processing Completed",
        "comments" : ""
      }, {
        "id" : 3,
        "snapshotDate" : "2007-02-28T00:00:00.000-0500",
        "targetSchema" : "Loan",
        "deleted" : false,
        "exceptions" : 5,
        "changes" : 10,
        "uploadComment" : "",
        "reviewedComment" : null,
        "uploadedBy" : "Mike",
        "uploadTime" : "2022-05-20T07:08:41.595-0400",
        "reviewedBy" : null,
        "reviewedTime" : null,
        "submittedBy" : null,
        "submittedTime" : null,
        "fileName" : "sample File.xlsx",
        "postingDate" : "2007-02-28T00:00:00.000-0500",
        "filePath" : "/share/proxy/alfresco/api/node/content/workspace/SpacesStore/3d355cee-1deb-49cb-a845-929207f28664/manage_nobre_sda_append_20070228_dafb6913ba4d4967b491aa3c831e6bcb.xlsx",
        "uploadedFileName" : "sample File.xlsx",
        "reviewTimeStamp" : null,
        "reviewComments" : null,
        "uploadedFilePath" : "/share/proxy/alfresco/api/node/content/workspace/SpacesStore/3d355cee-1deb-49cb-a845-929207f28664/manage_nobre_sda_append_20070228_dafb6913ba4d4967b491aa3c831e6bcb.xlsx",
        "status" : "Initial Processing Completed",
        "comments" : ""
      }, {
        "id" : 4,
        "snapshotDate" : "2007-02-28T00:00:00.000-0500",
        "targetSchema" : "Loan",
        "deleted" : false,
        "exceptions" : 5,
        "changes" : 10,
        "uploadComment" : "",
        "reviewedComment" : null,
        "uploadedBy" : "Mike",
        "uploadTime" : "2022-05-20T07:08:41.595-0400",
        "reviewedBy" : null,
        "reviewedTime" : null,
        "submittedBy" : null,
        "submittedTime" : null,
        "fileName" : "sample File.xlsx",
        "postingDate" : "2007-02-28T00:00:00.000-0500",
        "filePath" : "/share/proxy/alfresco/api/node/content/workspace/SpacesStore/3d355cee-1deb-49cb-a845-929207f28664/manage_nobre_sda_append_20070228_dafb6913ba4d4967b491aa3c831e6bcb.xlsx",
        "uploadedFileName" : "sample File.xlsx",
        "reviewTimeStamp" : null,
        "reviewComments" : null,
        "uploadedFilePath" : "/share/proxy/alfresco/api/node/content/workspace/SpacesStore/3d355cee-1deb-49cb-a845-929207f28664/manage_nobre_sda_append_20070228_dafb6913ba4d4967b491aa3c831e6bcb.xlsx",
        "status" : "Initial Processing Completed",
        "comments" : ""
      }, {
        "id" : 5,
        "snapshotDate" : "2007-02-28T00:00:00.000-0500",
        "targetSchema" : "Loan",
        "deleted" : false,
        "exceptions" : 5,
        "changes" : 10,
        "uploadComment" : "",
        "reviewedComment" : null,
        "uploadedBy" : "Mike",
        "uploadTime" : "2022-05-20T07:08:41.595-0400",
        "reviewedBy" : null,
        "reviewedTime" : null,
        "submittedBy" : null,
        "submittedTime" : null,
        "fileName" : "sample File.xlsx",
        "postingDate" : "2007-02-28T00:00:00.000-0500",
        "filePath" : "/share/proxy/alfresco/api/node/content/workspace/SpacesStore/3d355cee-1deb-49cb-a845-929207f28664/manage_nobre_sda_append_20070228_dafb6913ba4d4967b491aa3c831e6bcb.xlsx",
        "uploadedFileName" : "sample File.xlsx",
        "reviewTimeStamp" : null,
        "reviewComments" : null,
        "uploadedFilePath" : "/share/proxy/alfresco/api/node/content/workspace/SpacesStore/3d355cee-1deb-49cb-a845-929207f28664/manage_nobre_sda_append_20070228_dafb6913ba4d4967b491aa3c831e6bcb.xlsx",
        "status" : "Initial Processing Completed",
        "comments" : ""
      }, {
        "id" : 6,
        "snapshotDate" : "2007-02-28T00:00:00.000-0500",
        "targetSchema" : "Loan",
        "deleted" : false,
        "exceptions" : 5,
        "changes" : 10,
        "uploadComment" : "",
        "reviewedComment" : null,
        "uploadedBy" : "Mike",
        "uploadTime" : "2022-05-20T07:08:41.595-0400",
        "reviewedBy" : null,
        "reviewedTime" : null,
        "submittedBy" : null,
        "submittedTime" : null,
        "fileName" : "sample File.xlsx",
        "postingDate" : "2007-02-28T00:00:00.000-0500",
        "filePath" : "/share/proxy/alfresco/api/node/content/workspace/SpacesStore/3d355cee-1deb-49cb-a845-929207f28664/manage_nobre_sda_append_20070228_dafb6913ba4d4967b491aa3c831e6bcb.xlsx",
        "uploadedFileName" : "sample File.xlsx",
        "reviewTimeStamp" : null,
        "reviewComments" : null,
        "uploadedFilePath" : "/share/proxy/alfresco/api/node/content/workspace/SpacesStore/3d355cee-1deb-49cb-a845-929207f28664/manage_nobre_sda_append_20070228_dafb6913ba4d4967b491aa3c831e6bcb.xlsx",
        "status" : "Initial Processing Completed",
        "comments" : ""
      }, {
        "snapshotDate" : "2007-02-28T00:00:00.000-0500",
        "targetSchema" : "Loan",
        "deleted" : false,
        "exceptions" : 5,
        "changes" : 10,
        "uploadComment" : "",
        "reviewedComment" : null,
        "uploadedBy" : "Mike",
        "uploadTime" : "2022-05-20T07:08:41.595-0400",
        "reviewedBy" : null,
        "reviewedTime" : null,
        "submittedBy" : null,
        "submittedTime" : null,
        "fileName" : "sample File.xlsx",
        "postingDate" : "2007-02-28T00:00:00.000-0500",
        "filePath" : "/share/proxy/alfresco/api/node/content/workspace/SpacesStore/3d355cee-1deb-49cb-a845-929207f28664/manage_nobre_sda_append_20070228_dafb6913ba4d4967b491aa3c831e6bcb.xlsx",
        "uploadedFileName" : "sample File.xlsx",
        "reviewTimeStamp" : null,
        "reviewComments" : null,
        "uploadedFilePath" : "/share/proxy/alfresco/api/node/content/workspace/SpacesStore/3d355cee-1deb-49cb-a845-929207f28664/manage_nobre_sda_append_20070228_dafb6913ba4d4967b491aa3c831e6bcb.xlsx",
        "status" : "Initial Processing Completed",
        "comments" : ""
      } ],
      "page" : {
        "size" : 14,
        "totalElements" : 7,
        "totalPages" : 1,
        "number" : 0
      }
    };
//                 if (result.page.totalElements === 0) {
//                     uploadedFileList.content = [];
//                 }
  this.uploadedFileList = uploadedFileList;
  console.log("localStorage",localStorage.getItem("users"));
  if(localStorage.getItem("users") !== null && localStorage.getItem("users") !== undefined){
    console.log("sssssss",localStorage.getItem("users"));
    const uList = localStorage.getItem("users");
    this.userList =  [{"id":45,"name":"nshah","label":"admin","description":"This role enables the user to see new Angular UI ","permissions":[]},{"id":51,"name":"nshah0","label":"admin","description":"This role enables the user to see new Angular UI","permissions":[]},{"id":53,"name":"nshah1","label":"admin","description":"This role enables the user to see new Angular UI","permissions":[]},{"id":54,"name":"nshah2","label":"admin","description":"This role enables the user to see new Angular UI","permissions":[]},{"id":55,"name":"nshah3","label":"admin","description":"This role enables the user to see new Angular UI","permissions":[]},{"id":56,"name":"nshah4","label":"admin","description":"This role enables the user to see new Angular UI","permissions":[]},{"id":57,"name":"nshah5","label":"admin","description":"This role enables the user to see new Angular UI","permissions":[]},{"id":58,"name":"nshah6","label":"admin","description":"This role enables the user to see new Angular UI","permissions":[]}];
  } 

  this.service.getQueryDef("test").subscribe((users) => {
    console.log("user",users)
      this.userList = users;
      localStorage.setItem('users', JSON.stringify(users));
  });


  }

 
  uploadedFileList: any;
  loading = false;
  defaultPageSize = 5;
  multiSortMeta: any;
  spinnerText: any;
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

