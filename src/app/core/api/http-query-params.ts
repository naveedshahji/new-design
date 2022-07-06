import {HttpParams} from '@angular/common/http';
import {IPageRequest} from '../api/common';
    import {DateTime} from './date-time';

export class HttpParamsFromPageableQuery {

    public static toHttpParams<R extends IPageRequest>(pageRequest: R) {
        let params = new HttpParams();
        params = params
            .append('size', (pageRequest.size || 0).toString())
            .append('page', (pageRequest.page || 0).toString());
        if (pageRequest.sort instanceof Array) {
            pageRequest.sort.forEach((s) => {
                params = params.append('sort', s.field + ',' + s.order);
            });
        }

    
    }

}

export class HttpParamsFromObject {
    public static params(o: any): HttpParams {
        let params = new HttpParams();
        if (o) {
            for (const p in o) {
                if (o.hasOwnProperty(p) && o[p] !== undefined) {
                    let val = o[p];
                    if (o[p] instanceof Date) {
                        val = DateTime.convertOutputDate(<Date>o[p]);
                    }
                    params = params.append(p, val);
                }
            }
        }
        return params;
    }

    public static options(o: any): { params: HttpParams } {
        return {
            params: HttpParamsFromObject.params(o)
        };
    }
}

export class Url {
    public static create(url: string, params: { [key: string]: string }) {
        const re = new RegExp('\:' + params);
        if (re.test(url)) {
            
            //url = url.replace(re, encodeURIComponent(params));
        }
        return url;
    }
}
