import { createReducer, on } from '@ngrx/store';
import { createAdminUser, createAdminUserComplete,getAdminUser,getAdminUserComplete, deleteAdminUser, deleteAdminUserComplete } from './admin.actions';
  
import { adminState } from './admin.models';

export const initialState: adminState = {
  data: [],
  isRolesLoading: false,
  isError: false,
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
    console.log("props propspropspropsprops",props);
    console.log("props props.payload",props.payload);
    console.log("...state",state);
    console.log("...state datata",...state.data);
    if(props.payload && props.payload[0]){
      const newDiscoverResults = [...state.data, props.payload];
      const newDiscoverResults2 = [...state.data, props.payload[0]];
      console.log("...newDiscoverResults",newDiscoverResults);
      console.log("...newDiscoverResults2",newDiscoverResults2);
      return {...state, data: newDiscoverResults2};
    }
    else {
      return {...state, isError: true};
    }
  }),
  on(deleteAdminUser, (state, props) => {
    return {...state, adminState: props.payload};
  }),
  on(deleteAdminUserComplete, (state, props) => {
    console.log("delete 111111111",props);
    console.log("delete 222222",props.payload);
    console.log("delete 333333333",state);
    console.log("delete 44444444444444",...state.data);
    if(props.payload && props.payload[0]){
      const newDiscoverResults = [...state.data, props.payload];
      const newDiscoverResults2 = [...state.data, props.payload[0]];
      console.log("ddddddddd",newDiscoverResults);
      console.log("ddddddddddd",newDiscoverResults2);
      return {...state, data: newDiscoverResults2};
    }
    else {
      return {...state, isError: true};
    }
  }),
);

export function adminReducer(state: any | undefined, action: any) {
  return reducer(state, action);
}
