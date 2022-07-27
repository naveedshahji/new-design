import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
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
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  };
  // StandardHTTPPostOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/x-www-form-urlencoded'
  //   }),
  //   withCredentials: true,
  //   observe: 'response' as 'response'
  // };
  // const httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type':  'application/json',
  //     Authorization: 'my-auth-token'
  //   })
  // };
  StandardHTTPGetOptions = {
    withCredentials: true,
    observe: 'response' as 'response'
  };

  StandardHTTPDeleteOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    }),
    body: '',
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
        .subscribe({
          next: (data: any) => { 
            resolve(data);
          },
          error: (error) => {
            resolve(error);
          }
        });
    })
  }

  getArrayBufferPromise<T>(url: string): Promise<T> {
    return new Promise<T>(resolve => {
      this.getArrayBuffer(url)
      .subscribe({
        next: (data: any) => { 
          resolve(data);
        },
        error: (error) => {
          resolve(error);
        }
      });
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
    // console.log("this.TransformJSONToFormUrlEncoded(body)",this.TransformJSONToFormUrlEncoded(body))
    // let transformedBody: string = this.TransformJSONToFormUrlEncoded(body);
    // console.log("body",body)
    // console.log("vvvvvvvv (body)", )
    return this.http.put<T>(url, body, this.StandardHTTPPostOptions)
      .pipe(
        map((response: any) => {
          return response
        })
      )
  }

  putPromise<T>(url: string, body: any): Promise<T> {
    return new Promise<T>((resolve) => {
      this.put(url, body)
      .subscribe({
        next: (data: any) => { 
          resolve(data);
        },
        error: (error) => {
          console.log("error",error)
          resolve(error);
        }
      });
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
      .subscribe({
        next: (data: any) => { 
          resolve(data);
        },
        error: (error) => {
          resolve(error);
        }
      });
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

  // getPromise<T>(url: string): Promise<T> {
  //   console.log("inside promise")
  //   return new Promise<T>(resolve => {
  //     this.get(url)
  //       // .subscribe({complete: console.info})
  //       .subscribe((data: any) => {
  //         console.log("inside promise data", data)
  //         resolve(data);
  //       }, err => {
  //         resolve(err);
  //       })
  //   })
  // }

  getPromise<T>(url: string): Promise<T> {
      return new Promise<T>(resolve => {
        this.get(url)
        .subscribe({
          next: (data: any) => { 
            resolve(data);
          },
          error: (error) => {
            resolve(error);
          }
        });
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
        .subscribe((data: any) => {
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
    console.log("inside delete api", body);
    let transformedBody: any = this.TransformJSONToFormUrlEncoded(body);
    console.log("inside delete transformedBody",transformedBody);
    this.StandardHTTPDeleteOptions.body = transformedBody;
    console.log("urlurlurlurlurl", url);
    console.log("bodybodybodybody", body);
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
      .subscribe({
        next: (data: any) => { 
          resolve(data);
        },
        error: (error) => {
          resolve(error);
        }
      });
    })
  }

  status(): string {
    return "ok";
  };
}
