import {Injectable} from '@angular/core';
import {UserInfo} from './user-info';
// import {CookieService} from 'angular2-cookie/core';
import {environment} from '../../environments/environment';

declare var Keycloak: any;

@Injectable()
export class KeycloakService {
    static auth: any = {};
    static userInfo: UserInfo;

    static init(): Promise<any> {
        console.log("4444444444444444")
        if (environment.production) {
            return KeycloakService.initProduction();
        } else {
            return new Promise((resolve, reject) => resolve('0'));
        }
    }

    private static initProduction(): Promise<any> {
        console.log("5555555555")
        const kc: any = {};
        kc.realm = 'evolv-idp';
        kc['auth-server-url'] = '${keycloak.url}';
        kc['ssl-required'] = 'external';
        kc.resource = 'evolv-ui';
        kc['public-client'] = true;
        kc['token-minimum-time-to-live'] = 0;
        kc.clientId = kc.resource;
        kc.url = kc['auth-server-url'];

        // const service: any = new CookieService();
        // const fimClient = service.get('fimTenant');
        // // Retrieving fimClient cookie
        // if (fimClient) {
        //     console.log('Found FIM Tenant cookie [' + fimClient + ']');
        //     kc.realm = fimClient + '-idp';
        // }

        const keycloakAuth: any = new Keycloak(kc);
        KeycloakService.auth.loggedIn = false;

        function getURI() {
            let uri = document.baseURI;
            if (!uri) {
                const baseTags = document.getElementsByTagName('base');
                uri = baseTags.length ? baseTags[0].href : document.URL;
            }
            return uri;
        }

        return new Promise((resolve, reject) => {
            console.log("6666666666666666666")
            keycloakAuth
                .init({onLoad: 'login-required', checkLoginIframe: false})
                .success(() => {
                    KeycloakService.auth.loggedIn = true;
                    console.log('keycloak realm ' + keycloakAuth.realm);
                    KeycloakService.auth.authz = keycloakAuth;
                    KeycloakService.auth.logoutUrl =
                        keycloakAuth.authServerUrl +
                        '/realms/' +
                        keycloakAuth.realm +
                        '/protocol/openid-connect/logout?redirect_uri=' + getURI();

                    KeycloakService.auth.authz.loadUserProfile().success(() => {
                        this.userInfo = new UserInfo();
                        // populating the user info
                        this.userInfo.token = keycloakAuth.token;
                        this.userInfo.tenant = keycloakAuth.tokenParsed.tenant;
                        this.userInfo.firstname = keycloakAuth.tokenParsed.given_name;
                        this.userInfo.lastname = keycloakAuth.tokenParsed.family_name;
                        this.userInfo.email = keycloakAuth.tokenParsed.email;
                        this.userInfo.groups = keycloakAuth.tokenParsed.groups;

                        this.userInfo.lastlogin = keycloakAuth.tokenParsed[this.userInfo.tenant + '_LOGIN_DETAIL'];
                        this.userInfo.lastlogin =
                            this.userInfo.lastlogin.substring(this.userInfo.lastlogin.indexOf('=') + 1,
                                this.userInfo.lastlogin.lastIndexOf('"'));

                        resolve('0');

                    });
                })
                .error(() => {
                    reject();
                });
        });
    }

    static getToken(): Promise<string> {
        console.log("777777777777777")
        return new Promise<string>((resolve, reject) => {
            if (KeycloakService.auth.authz.token) {
                KeycloakService.auth.authz
                    .updateToken(90) // refresh token if it will expire in 90 seconds or less
                    .success(() => {
                        resolve(<string>KeycloakService.auth.authz.token);
                    })
                    .error(() => {
                        reject('Failed to refresh token');
                    });
            } else {
                reject('Not logged in');
            }
        });
    }

    hasAnyRole(roles: string[]): boolean {
        console.log("0000000000000")
        for (const r of roles) {
            if (this.hasRole(r)) {
                return true;
            }
        }

        return false;
    }

    hasRole(role: string): boolean {
        return KeycloakService.auth.authz.hasRealmRole(role);
    }

    hasManageUsersRole(): boolean {
        return KeycloakService.auth.authz.hasResourceRole('manage-users', 'realm-management');
    }

    logout() {
        console.log('Logging out user.');
        KeycloakService.auth.loggedIn = false;
        KeycloakService.auth.authz = null;

        window.location.href = KeycloakService.auth.logoutUrl;
    }

    getUserInfo(): UserInfo {
        console.log("99999")
        return KeycloakService.userInfo;
    }
}

