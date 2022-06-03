import {Component, OnInit, ViewChild, ChangeDetectionStrategy} from '@angular/core';
import {LazyLoadEvent, SortMeta} from 'primeng/api';
import {Table} from 'primeng/table';
import {delay, finalize, mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-valuation-home',
  templateUrl: './valuation-home.component.html',
  styleUrls: ['./valuation-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ValuationHomeComponent implements OnInit {

  constructor() { }

  uploadedFileList: any;
  loading = false;
  defaultPageSize = 5;
  multiSortMeta: any;
  spinnerText: any;
  @ViewChild(Table, {static: true}) table: any;
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
    }
  
    getSortIndex(field: string): string {
      return "null";
  }
    
  load(){}
}
