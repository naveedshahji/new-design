
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
 
import { adminReducer } from '../admin.reducer';
import { adminState } from '../admin.models';

export interface State {
  admin: adminState
}

// console.log all actions
export function debug(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state, action) {
    return reducer(state, action);
  };
}

export const reducers: ActionReducerMap<State> = { 
  admin: adminReducer
};

export const metaReducers: MetaReducer<State>[] = [];