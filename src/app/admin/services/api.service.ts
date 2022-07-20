import { Injectable } from '@angular/core';
// import { environment } from 'environments/environment';
// import { Http, Response } from '@angular/http'; 
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable, of, throwError, map, catchError} from 'rxjs';
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
} from '../../core/api/api-calls';
import { delay } from 'rxjs/operators';
// import { map, catchError } from 'rxjs/operators';
const API_URL = "environment.apiUrl";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};
@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient
  ) {
 
  }

  public getAllRoles(url:any): Observable<any> {
    return this.http
      .get(url, httpOptions)
      .pipe(delay(500),map((response: any) => response),
      catchError(err => {
        console.log('caught mapping error and rethrowing', err);
        return throwError(() => new Error('test'));
    }),
    catchError(err => {
        console.log('caught rethrown error, providing fallback value');
        return of([]);
    }))
  }

  public createAdmin(admin: any): Observable<any> {
    return this.http
      .post(API_URL + '/Admi', admin)
      .pipe(map((response: any) => response.json()),
      catchError(err => {
        console.log('caught mapping error and rethrowing', err);
        return  throwError(() => new Error('test'));
    }),
    catchError(err => {
        console.log('caught rethrown error, providing fallback value');
        return of([]);
    }))
      //.catch(this.handleError);
  }

  public getAdminById(adminId: number): Observable<any> {
    return this.http
      .get(API_URL + '/admin/' + adminId)
      .pipe(map((response: any) => response.json()),
      catchError(err => {
        console.log('caught mapping error and rethrowing', err);
        return  throwError(() => new Error('test'));
    }),
    catchError(err => {
        console.log('caught rethrown error, providing fallback value');
        return of([]);
    }))
  }

  public updateRole(role: any, url:any): Observable<any> {
    console.log("Fffffff",role, url)
    return this.http
      .put(url, role, httpOptions)
      .pipe(map((response: any) => response),
      catchError(err => {
        console.log('caught mapping error and rethrowing', err);
        return  throwError(() => new Error('test'));
    }),
    catchError(err => {
        console.log('caught rethrown error, providing fallback value');
        return of([]);
    }))
  }

  public deleteRoleById(url: any,id: number): Observable<null> {
    return this.http
      .post(url, [id.toString()], httpOptions)
      .pipe(map((response: any) => response))
      //.catch(this.handleError);
  }

  // public deleteRoleById(adminId: number): Observable<null> {
  //   return this.http
  //     .delete(API_URL + '/Admi/' + adminId)
  //     .pipe(map((response: any) => response.json()))
  //     //.catch(this.handleError);
  // }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return throwError(() => new Error('test'));
  }
}
