import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

import {switchMap} from 'rxjs/operators';
import {KeycloakService} from './keycloak.service';
import {Observable} from 'rxjs';
import {fromPromise} from 'rxjs/internal-compatibility';
import {environment} from '../../environments/environment';


@Injectable()
export class KeycloakHttpInterceptor implements HttpInterceptor {

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        console.log("33333333333333333")
        if (environment.production) {
            return fromPromise(KeycloakService.getToken())
                .pipe(switchMap((token) => {
                    if (KeycloakService.auth.loggedIn && KeycloakService.auth.authz.authenticated) {
                        const kcToken = KeycloakService.auth.authz.token;
                        request = request.clone({
                            setHeaders: {
                                Authorization: 'Bearer ' + kcToken
                            }
                        });

                    }
                    return next.handle(request);
                }));
        } else {
            return next.handle(request);
        }
    }
}
