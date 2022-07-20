import { createAction, props } from '@ngrx/store';
// import { DataStoreItem, SetDataStore } from '../../core/http/shared/models/data-store';
import { adminState } from './admin.models';
// import { SingleadminResponse } from '../../core/http/admin/models/single-admin-reponse';
// import { BaseMesssageResponse } from '../../core/http/admin/models/base-reponse';
// import { ViewsContentResponse } from '../../core/http/admin/models/views-content-reponse';
// import { ViewPostResponse } from '../../core/http/admin/models/view-post-reponse';
// import { TaggedUsersResponse } from "../../core/http/admin/models/tagged-users-response";


export const createAdminUser = createAction('createAdminUser', props<{payload: {url: string, params: [{name: string, label: string, description: string}]}}>());
export const createAdminUserComplete = createAction('createAdminUserComplete', 
props<{payload: [ {
     id  : number,
     name : string,
     label  : string,
     description  : string,
     permissions  : any
  } ]}>());
  export const getAdminUser = createAction('getAdminUser', props<{payload: {url: string}}>());
    export const getAdminUserComplete = createAction('getAdminUserComplete', 
    props<{payload: [ {
        id  : number,
        name : string,
        label  : string,
        description  : string,
        permissions  : any
    } ]}>());
// export const emptyTaggedContentState = createAction('/admin/emptyTaggedContentState');

