import {Component, OnInit, ViewChild, ChangeDetectionStrategy} from '@angular/core';
import {LazyLoadEvent, SortMeta} from 'primeng/api';
import {Table} from 'primeng/table';
import {delay, finalize, mergeMap} from 'rxjs/operators';
@Component({
  selector: 'app-configure-rcf',
  templateUrl: './configure-rcf.component.html',
  styleUrls: ['./configure-rcf.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfigureRcfComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    
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
              const uploadedFileList: any = {
                                              "links" : [ ],
                                              "content" : [ {
                                                "id" : 1,
                                                "snapshotDate" : "2007-02-28T00:00:00.000-0500",
                                                "targetSchema" : "SDA",
                                                "deleted" : false,
                                                "exceptions" : 5,
                                                "changes" : 10,
                                                "uploadComment" : "",
                                                "reviewedComment" : null,
                                                "uploadedBy" : "es30client1a",
                                                "uploadTime" : "2022-05-20T07:08:41.595-0400",
                                                "reviewedBy" : null,
                                                "reviewedTime" : null,
                                                "submittedBy" : null,
                                                "submittedTime" : null,
                                                "fileName" : "2-Simple_SDAFile - sample File.xlsx",
                                                "postingDate" : "2007-02-28T00:00:00.000-0500",
                                                "filePath" : "/share/proxy/alfresco/api/node/content/workspace/SpacesStore/3d355cee-1deb-49cb-a845-929207f28664/manage_nobre_sda_append_20070228_dafb6913ba4d4967b491aa3c831e6bcb.xlsx",
                                                "uploadedFileName" : "2-Simple_SDAFile - sample File.xlsx",
                                                "reviewTimeStamp" : null,
                                                "reviewComments" : null,
                                                "uploadedFilePath" : "/share/proxy/alfresco/api/node/content/workspace/SpacesStore/3d355cee-1deb-49cb-a845-929207f28664/manage_nobre_sda_append_20070228_dafb6913ba4d4967b491aa3c831e6bcb.xlsx",
                                                "status" : "Preliminary Processing Completed",
                                                "comments" : ""
                                              }, {
                                                "id" : 2,
                                                "snapshotDate" : "2006-04-30T00:00:00.000-0400",
                                                "targetSchema" : "ESI",
                                                "deleted" : false,
                                                "exceptions" : 0,
                                                "changes" : 6,
                                                "uploadComment" : "",
                                                "reviewedComment" : null,
                                                "uploadedBy" : "es30client1a",
                                                "uploadTime" : "2022-05-20T11:17:34.825-0400",
                                                "reviewedBy" : null,
                                                "reviewedTime" : null,
                                                "submittedBy" : null,
                                                "submittedTime" : null,
                                                "fileName" : "InstrumentData_4_30 - Copy.xlsx",
                                                "postingDate" : "2006-04-30T00:00:00.000-0400",
                                                "filePath" : "/share/proxy/alfresco/api/node/content/workspace/SpacesStore/f636d646-290c-49e1-a323-909325c24f46/stage_append_20060430_9be20a8a0fb643e49657ad3006a6f0af.xlsx",
                                                "uploadedFileName" : "InstrumentData_4_30 - Copy.xlsx",
                                                "reviewTimeStamp" : null,
                                                "reviewComments" : null,
                                                "uploadedFilePath" : "/share/proxy/alfresco/api/node/content/workspace/SpacesStore/f636d646-290c-49e1-a323-909325c24f46/stage_append_20060430_9be20a8a0fb643e49657ad3006a6f0af.xlsx",
                                                "status" : "Preliminary Processing Completed",
                                                "comments" : ""
                                              }, {
                                                "id" : 3,
                                                "snapshotDate" : "2007-02-28T00:00:00.000-0500",
                                                "targetSchema" : "SDA",
                                                "deleted" : false,
                                                "exceptions" : 37,
                                                "changes" : 17,
                                                "uploadComment" : "",
                                                "reviewedComment" : null,
                                                "uploadedBy" : "es30client1a",
                                                "uploadTime" : "2022-05-20T11:19:21.912-0400",
                                                "reviewedBy" : null,
                                                "reviewedTime" : null,
                                                "submittedBy" : null,
                                                "submittedTime" : null,
                                                "fileName" : "Loan_NoException.xlsx",
                                                "postingDate" : "2007-02-28T00:00:00.000-0500",
                                                "filePath" : "/share/proxy/alfresco/api/node/content/workspace/SpacesStore/78feb600-6c95-440e-b645-43ead9b5bd38/manage_nobre_sda_append_20070228_4cd63ac46c9e436986f68678d59162e4.xlsx",
                                                "uploadedFileName" : "Loan_NoException.xlsx",
                                                "reviewTimeStamp" : null,
                                                "reviewComments" : null,
                                                "uploadedFilePath" : "/share/proxy/alfresco/api/node/content/workspace/SpacesStore/78feb600-6c95-440e-b645-43ead9b5bd38/manage_nobre_sda_append_20070228_4cd63ac46c9e436986f68678d59162e4.xlsx",
                                                "status" : "Preliminary Processing Completed",
                                                "comments" : ""
                                              }, {
                                                "id" : 4,
                                                "snapshotDate" : "2007-02-28T00:00:00.000-0500",
                                                "targetSchema" : "ESI",
                                                "deleted" : false,
                                                "exceptions" : 3,
                                                "changes" : 2,
                                                "uploadComment" : "",
                                                "reviewedComment" : null,
                                                "uploadedBy" : "es30client1a",
                                                "uploadTime" : "2022-05-20T11:25:40.995-0400",
                                                "reviewedBy" : null,
                                                "reviewedTime" : null,
                                                "submittedBy" : null,
                                                "submittedTime" : null,
                                                "fileName" : "CashPayment_Exp1.xlsx",
                                                "postingDate" : "2007-02-28T00:00:00.000-0500",
                                                "filePath" : "/share/proxy/alfresco/api/node/content/workspace/SpacesStore/5af9d4b9-c353-47a3-8065-1b5cb50b76c4/manage_nobre_sda_append_20070228_9178a077fad749749e5d4ca370813a89.xlsx",
                                                "uploadedFileName" : "CashPayment_Exp1.xlsx",
                                                "reviewTimeStamp" : null,
                                                "reviewComments" : null,
                                                "uploadedFilePath" : "/share/proxy/alfresco/api/node/content/workspace/SpacesStore/5af9d4b9-c353-47a3-8065-1b5cb50b76c4/manage_nobre_sda_append_20070228_9178a077fad749749e5d4ca370813a89.xlsx",
                                                "status" : "Preliminary Processing Completed",
                                                "comments" : ""
                                              }, {
                                                "id" : 5,
                                                "snapshotDate" : "2007-03-31T00:00:00.000-0400",
                                                "targetSchema" : "SDA",
                                                "deleted" : false,
                                                "exceptions" : 5,
                                                "changes" : 10,
                                                "uploadComment" : "",
                                                "reviewedComment" : null,
                                                "uploadedBy" : "es30client1a",
                                                "uploadTime" : "2022-05-20T11:27:23.597-0400",
                                                "reviewedBy" : null,
                                                "reviewedTime" : null,
                                                "submittedBy" : null,
                                                "submittedTime" : null,
                                                "fileName" : "2-Simple_SDAFile - sample File.xlsx",
                                                "postingDate" : "2007-03-31T00:00:00.000-0400",
                                                "filePath" : "/share/proxy/alfresco/api/node/content/workspace/SpacesStore/51f96752-4677-4f72-9429-1e31d93f24ae/manage_nobre_sda_append_20070331_d6a8dae62ca34883b13e31ed60dc35b5.xlsx",
                                                "uploadedFileName" : "2-Simple_SDAFile - sample File.xlsx",
                                                "reviewTimeStamp" : null,
                                                "reviewComments" : null,
                                                "uploadedFilePath" : "/share/proxy/alfresco/api/node/content/workspace/SpacesStore/51f96752-4677-4f72-9429-1e31d93f24ae/manage_nobre_sda_append_20070331_d6a8dae62ca34883b13e31ed60dc35b5.xlsx",
                                                "status" : "Preliminary Processing Completed",
                                                "comments" : ""
                                              }, {
                                                "id" : 6,
                                                "snapshotDate" : "2007-03-31T00:00:00.000-0400",
                                                "targetSchema" : "SDA",
                                                "deleted" : false,
                                                "exceptions" : 5,
                                                "changes" : 11,
                                                "uploadComment" : "",
                                                "reviewedComment" : null,
                                                "uploadedBy" : "es30client1a",
                                                "uploadTime" : "2022-05-20T11:29:36.796-0400",
                                                "reviewedBy" : null,
                                                "reviewedTime" : null,
                                                "submittedBy" : null,
                                                "submittedTime" : null,
                                                "fileName" : "2-Simple_SDAFile - sample File.xlsx",
                                                "postingDate" : "2007-03-31T00:00:00.000-0400",
                                                "filePath" : "/share/proxy/alfresco/api/node/content/workspace/SpacesStore/c991b9cc-e9ec-457c-9dac-bb19ac9abeef/manage_nobre_sda_append_20070331_8c17bb4844f84705a7808144d8088c35.xlsx",
                                                "uploadedFileName" : "2-Simple_SDAFile - sample File.xlsx",
                                                "reviewTimeStamp" : null,
                                                "reviewComments" : null,
                                                "uploadedFilePath" : "/share/proxy/alfresco/api/node/content/workspace/SpacesStore/c991b9cc-e9ec-457c-9dac-bb19ac9abeef/manage_nobre_sda_append_20070331_8c17bb4844f84705a7808144d8088c35.xlsx",
                                                "status" : "Preliminary Processing Completed",
                                                "comments" : ""
                                              }, {
                                                "id" : 7,
                                                "snapshotDate" : "2007-03-31T00:00:00.000-0400",
                                                "targetSchema" : "SDA",
                                                "deleted" : false,
                                                "exceptions" : 5,
                                                "changes" : 0,
                                                "uploadComment" : "",
                                                "reviewedComment" : null,
                                                "uploadedBy" : "es30client1a",
                                                "uploadTime" : "2022-05-20T11:31:43.070-0400",
                                                "reviewedBy" : null,
                                                "reviewedTime" : null,
                                                "submittedBy" : null,
                                                "submittedTime" : null,
                                                "fileName" : "2-Simple_SDAFile - sample File.xlsx",
                                                "postingDate" : "2007-03-31T00:00:00.000-0400",
                                                "filePath" : "/share/proxy/alfresco/api/node/content/workspace/SpacesStore/b81b82b9-9bdc-44c6-bf82-ce6201aceaff/manage_nobre_sda_delete_20070331_62f79d99e55b49ba99831fc06c59ccdc.xlsx",
                                                "uploadedFileName" : "2-Simple_SDAFile - sample File.xlsx",
                                                "reviewTimeStamp" : null,
                                                "reviewComments" : null,
                                                "uploadedFilePath" : "/share/proxy/alfresco/api/node/content/workspace/SpacesStore/b81b82b9-9bdc-44c6-bf82-ce6201aceaff/manage_nobre_sda_delete_20070331_62f79d99e55b49ba99831fc06c59ccdc.xlsx",
                                                "status" : "Preliminary Processing Completed",
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
}

