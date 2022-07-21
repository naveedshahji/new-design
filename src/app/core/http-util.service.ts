import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: CoreModule
})
export class HttpUtilService {
  constructor(private http: HttpClient) { }

  TransformJSONToFormUrlEncoded(obj: any): string {
    let str = [];
    for (var p in obj) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
    return str.join("&");
  };

  StandardHTTPPostOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    }),
    withCredentials: true,
    observe: 'response' as 'response'
  };

  StandardHTTPGetOptions = {
    withCredentials: true,
    observe: 'response' as 'response'
  };

  StandardHTTPDeleteOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    }),
    body: null,
    observe: 'response' as 'response'
  };

  postWithBoundaries<T>(url: string, body: any): Observable<T> {
    const formData = new FormData();
    if (body !== undefined && body !== null) {
      for (var key in body) { // jshint ignore:line
        var attrName = key;
        var attrValue = body[key];
        formData.append(attrName, attrValue);
      }
    }
    return this.http.post<T>(url, formData)
      .pipe(
        map((response: any) => {
          return response
        })
      )
  }

  postWithBoundariesPromise<T>(url: string, body: any): Promise<T> {
    return new Promise<T>((resolve) => {
      this.postWithBoundaries(url, body)
        .subscribe((data: T) => {
          resolve(data);
        }, err => {
          //TODO: Let's think of a better way to handle this
          resolve(null);
        })
    })
  }

  getArrayBufferPromise<T>(url: string): Promise<T> {
    return new Promise<T>(resolve => {
      this.getArrayBuffer(url)
      .subscribe((data: any) => {
        resolve(data);
      }, err => {
        resolve(null);
      })
    })
  }

  getArrayBuffer(url: string): Observable<ArrayBuffer> {
    let headers = new HttpHeaders();

    const options: {
        headers?: HttpHeaders;
        observe?: 'body';
        params?: HttpParams;
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    } = {
        responseType: 'arraybuffer'
    };
    
    return this.http.get(url, options)
      .pipe(
        map((file: ArrayBuffer) => {
          return file
        })
      )
  }

  put<T>(url: string, body: any): Observable<T> {
    let transformedBody: string = this.TransformJSONToFormUrlEncoded(body);

    return this.http.put<T>(url, transformedBody, this.StandardHTTPPostOptions)
      .pipe(
        map((response: any) => {
          return response.body
        })
      )
  }

  putPromise<T>(url: string, body: any): Promise<T> {
    return new Promise<T>((resolve) => {
      this.put(url, body)
        .subscribe((data: T) => {
          resolve(data);
        }, err => {
          //TODO: Let's think of a better way to handle this
          resolve(null);
        })
    })
  }
  
  post<T>(url: string, body: any): Observable<T> {
    let transformedBody: string = this.TransformJSONToFormUrlEncoded(body);

    return this.http.post<T>(url, transformedBody, this.StandardHTTPPostOptions)
      .pipe(
        map((response: any) => {
          return response.body
        })
      )
  }

  postPromise<T>(url: string, body: any): Promise<T> {
    return new Promise<T>((resolve) => {
      this.post(url, body)
        .subscribe((data: T) => {
          resolve(data);
        }, err => {
          //TODO: Let's think of a better way to handle this
          if( err.status != undefined && err.status == '429'){
            var responseObj: any = { 'type' :'error', 'status' : err.status};
            resolve(responseObj);
          } else {
            resolve(null);
          }
        })
    })
  }

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url, this.StandardHTTPGetOptions)
      .pipe(
        map((response: any) => {
          return response.body
        })
      )
  }

  getPromise<T>(url: string): Promise<T> {
    return new Promise<T>(resolve => {
      this.get(url)
        .subscribe((data: T) => {
          resolve(data);
        }, err => {
          resolve(null);
        })
    })
  }

  getBlob<T>(url: string): Observable<T> {
    return this.http.get(url, {
      withCredentials: true,
      observe: 'response' as 'response',
      responseType: 'blob'
    })
      .pipe(
        map((response: any) => {
          return response.body
        })
      )
  }

  getBlobPromise<T>(url: string): Promise<T> {
    return new Promise<T>(resolve => {
      this.getBlob(url)
        .subscribe((data: T) => {
          resolve(data);
        })
    })
  }

  simpleGetPromise<T>(url: string): Promise<T> {
    return new Promise<T>(resolve => {

      const Http = new XMLHttpRequest();
      Http.open("GET", url);
      Http.send();

      Http.onreadystatechange = (e) => {
        if (Http.responseText != "") {
          resolve(JSON.parse(Http.responseText));
        }
      }
    })
  }

  delete<T>(url: string, body: any): Observable<T> {
    let transformedBody: string = this.TransformJSONToFormUrlEncoded(body);
    this.StandardHTTPDeleteOptions.body = transformedBody;

    return this.http.delete<T>(url, this.StandardHTTPDeleteOptions)
      .pipe(
        map((response: any) => {
          return response.body
        })
      )
  }

  deletePromise<T>(url: string, body?: any): Promise<T> {
    return new Promise<T>((resolve) => {
      this.delete(url, body)
        .subscribe((data: T) => {
          resolve(data);
        }, err => {
          //TODO: Let's think of a better way to handle this
          resolve(null);
        })
    })
  }

  status(): string {
    return "ok";
  };
}
