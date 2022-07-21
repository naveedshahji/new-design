
// import { DataStoreItem, SetDataStore } from '../../core/http/shared/models/data-store';
// import { SingleadminResponse } from '../../core/http/admin/models/single-admin-reponse';
// import { BaseMesssageResponse } from '../../core/http/admin/models/base-reponse';
// import { ViewsContentResponse } from '../../core/http/admin/models/views-content-reponse';
// import { ViewPostResponse } from '../../core/http/admin/models/view-post-reponse';
// import { TaggedUsersResponse } from '../../core/http/admin/models/tagged-users-response';
export interface adminState {
  isRolesLoading:boolean,
  id? : any,
  name? : string,
  label? : string,
  description? : string,
  permissions? : any
}

// export interface SetadminFilterDataStoreData {
//   type: string, 
//   key: string, 
//   value: any
// }
