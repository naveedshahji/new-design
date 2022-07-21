import { createReducer, on } from '@ngrx/store';
import { createAdminUser, createAdminUserComplete,getAdminUser,getAdminUserComplete } from './admin.actions';
  
import { adminState } from './admin.models';

export const initialState: adminState = {
  isRolesLoading: false,
  id  : 32432,
  name : "sadsadsadsa",
  label  : "SAdasdsad",
  description  : "sadasdsads",
  permissions  : []
}
  

const reducer = createReducer(initialState,
  on(getAdminUser, (state, props) => {
    return {...state, isRolesLoading: true, datapassing: props.payload}
  }),
  on(getAdminUserComplete, (state, props) => {
    return {...state, isRolesLoading: false, data: props.payload}
  }),
  on(createAdminUser, (state, props) => {
    return {...state, adminState: props.payload};
  }),
  on(createAdminUserComplete, (state, props) => {
    return {...state, data: props.payload};
  }),
);

export function adminReducer(state: any | undefined, action: any) {
  return reducer(state, action);
}
