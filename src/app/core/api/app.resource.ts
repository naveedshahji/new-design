import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {
    DEFAULT_QUERY_DEF_CATEGORY,
    apis,
    IQueryDef,
    IAppConfig,
    IUploadedFile,
    TQueryDefQuery,
    TApproveOrRejectAction,
    IApproveOrRejectQuery,
    ILatestPosting,
    ISummaryData,
    IDownloadFormatQuery,
    TDownloadFileFormat, TFileAction, ISummaryResponseItem
} from '../api/api-calls';
import {HttpParamsFromObject, HttpParamsFromPageableQuery, Url} from '../api/http-query-params';

export const FIELDS_MAP = {};

/**
 * API layer in terms of the applied problem, hides details of http protocol
 */
@Injectable({
    providedIn: 'root'
})
export class AppResourceService {

    constructor(private http: HttpClient) {
    }

    // getQueryTypes(): Observable<string[]> {
    //     return this.http.get<string[]>(Url.create(apis.queryTypes, {
    //         usageType: DEFAULT_QUERY_DEF_CATEGORY
    //     }));
    // }

    // getQueryDef(name: string): Observable<IQueryDef> {
    //     return this.http.get<IQueryDef>(apis.queryDef,
    //         HttpParamsFromObject.options(<TQueryDefQuery>{
    //             querySetName: name,
    //             usageType: DEFAULT_QUERY_DEF_CATEGORY
    //         }));
    // }
    

    // getQueryDef(name: string): Observable<IQueryDef> {
    //     console.log("name",name)
    //     return this.http.get<IQueryDef>(apis.uploadedFiles);
    // }
    getQueryDef(name: string): Observable<IQueryDef> {
        return this.http.get<IQueryDef>(apis.uploadedFiles,
            HttpParamsFromObject.options(<TQueryDefQuery>{
                querySetName: name,
                usageType: DEFAULT_QUERY_DEF_CATEGORY
            }));
    }

    // getUploadedFiles(query: TUploadedFilesQuery): Observable<IPageableResult<IUploadedFile>> {
    //     return this.http.get<IPageableResult<IUploadedFile>>(
    //         query.uploadedFileName ? EDT_ENTRY_POINTS.uploadedFilesFilter : EDT_ENTRY_POINTS.uploadedFiles,
    //         {
    //             params: HttpParamsFromPageableQuery.toHttpParams(query),
    //             headers: {
    //                 Accept: 'application/schema+json'
    //             }
    //         });
    // }

    // getUploadedFile(id: number): Observable<IUploadedFile> {
    //     return this.http.get<IUploadedFile>(
    //         Url.create(EDT_ENTRY_POINTS.uploadedFile, {id: id.toString()}));
    // }

    // getAppConfig(): Observable<IAppConfig> {
    //     return this.http.get<IAppConfig>(EDT_ENTRY_POINTS.config);
    // }

    // approveOrRejectFile(id: number, action: TApproveOrRejectAction, comment: string): Observable<IStatused> {
    //     return this.http.post<any>(
    //         Url.create(EDT_ENTRY_POINTS[action], {
    //             fileId: id.toString()
    //         }),
    //         {},
    //         HttpParamsFromObject.options(<IApproveOrRejectQuery>{
    //             comment: comment == null ? undefined : comment
    //         }));
    // }

    // getSummaryData(id: number): Observable<ISummaryData> {
    //     return this.http.get<ISummaryData>(Url.create(EDT_ENTRY_POINTS.summaryOld, {
    //         id: id.toString()
    //     }));
    // }

    // getSummary(id: number): Observable<ISummaryResponseItem[]> {
    //     return this.http.get<ISummaryResponseItem[]>(Url.create(EDT_ENTRY_POINTS.summary, {
    //         id: id.toString()
    //     }));
    // }

    // generateChangeLog(id: number): Observable<any> {
    //     return this.http.get<any>(Url.create(apis.auditLog, {
    //         id: id.toString()
    //     }), {});
    // }

    // getLatestPosting(): Observable<ILatestPosting> {
    //     return this.http.get<ILatestPosting>(EDT_ENTRY_POINTS.latestPosting);
    // }

    // performAction(id: number, action: TFileAction): Observable<IStatused> {
    //     if (action === 'delete') {
    //         return this.http.delete<any>(Url.create(EDT_ENTRY_POINTS.file, {
    //             fileId: id.toString()
    //         }));
    //     } else {
    //         return this.http.post<any>(Url.create(EDT_ENTRY_POINTS[action], {
    //             fileId: id.toString()
    //         }), {});
    //     }
    // }

    // getTemplateTables(): Observable<string[]> {
    //     return this.http.get<string[]>(EDT_ENTRY_POINTS.templateTables);
    // }
}

