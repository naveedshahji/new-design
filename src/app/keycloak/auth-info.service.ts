import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {KeycloakService} from './keycloak.service';
import {UserInfo} from './user-info';
import {DEV_LOGOUT_URL} from '../api/edt';

@Injectable({
    providedIn: 'root'
})
export class AuthInfoService {
   
    private _userInfo: UserInfo;

    get userInfo(): UserInfo {
        console.log("11111111")
        if (!this._userInfo) {
            if (environment.production) {
                this._userInfo = KeycloakService.userInfo;
            } else {
                const date = new Date();
                date.setMonth(date.getMonth() - 1);
                this._userInfo = {
                    email: 'John.Smith@mail.com',
                    firstname: 'John',
                    lastname: 'Smith',
                    tenant: 'TENANT_DEV',
                    lastlogin: date.toISOString(),
                    token: '~~~token~~~',
                    groups: ''
                };
            }
        }
        return this._userInfo;
    }

    getLogoutUrl(): string {
        console.log("22222222222222222222");
        if (environment.production) {
            // return KeycloakService.auth.logoutUrl;
            return `/app/logout/`;
        } else {
            return DEV_LOGOUT_URL;
        }
    }

    getIdleIntervalSeconds(): number {
        console.log("3333333333333333");
        if (environment.production) {
            return 60 * 30;
        } else {
            return 60 * 30;
        }
    }
}
