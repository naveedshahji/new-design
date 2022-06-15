import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TreeNode } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class TreenodeserviceService {
  

  constructor(protected http: HttpClient) { }

  getFiles() : Promise<any> {
      return this.http.get<any>('assets/files.json')
        .toPromise()
        .then(res => <any>res.data)
        .then(data => {return data});
      }



    // return this.http.get<any>('assets/files.json')
    //   .toPromise()
    //   .then(res => <TreeNode[]>res.data);
    // }

    getLazyFiles() : Promise<any> {
      return this.http.get<any>('assets/files.json')
        .toPromise()
        .then(res => <any>res.data)
        .then(data => {return data});
      }
    
    // {
    // return this.http.get<any>('assets/files-lazy.json')
    //   .toPromise()
    //   .then(res => <TreeNode[]>res.data);
    // }
}
