import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { State } from "../store/reducers";
import { mergeMap, map, withLatestFrom } from "rxjs/operators";
import { from, empty, Observable } from "rxjs";
import { getAdminUser, getAdminUserComplete, createAdminUser, createAdminUserComplete, deleteAdminUser, deleteAdminUserComplete } from "./admin.actions";
import { AdminApiService } from '../services/admin-api.service';
import { Action } from "rxjs/internal/scheduler/Action";

@Injectable()
export class adminEffects {
  constructor(
    private actions$: Actions,
    private store$: Store<State>, 
    private adminApiService: AdminApiService) {
  }

  getAdminUser$ = createEffect(() => this.actions$.pipe( 
    ofType(getAdminUser),
    mergeMap(action => {
      return from(this.adminApiService.getAllRoles(action.payload.url))
        .pipe(
          map((response) => {
            console.log("in get",response)
            return getAdminUserComplete({payload: response});
          })
        )
    })
  ));
  // getAdminUser$ = createEffect(() => this.actions$.pipe( 
  //   ofType(getAdminUser),
  //   mergeMap(action => {
  //     return from(this.adminService.getAllRoles(action.payload.url))
  //       .pipe(
  //         map((response) => {
  //           console.log("in get",response)
  //           return getAdminUserComplete({payload: response});
  //         })
  //       )
  //   })
  // ));

  
  createAdminUser$ = createEffect(() => this.actions$.pipe( 
    ofType(createAdminUser),
    mergeMap(action => {
      return from(this.adminApiService.createRoles(action.payload.url, action.payload.params))
        .pipe(
          map((response) => {
            return createAdminUserComplete({payload: response});
          })
        )
    })
  ));

  deleteAdminUser$ = createEffect(() => this.actions$.pipe( 
    ofType(deleteAdminUser),
    mergeMap(action => {
      console.log("action.payload.params",action.payload.params)
      return from(this.adminApiService.deleteRole(action.payload.url, action.payload.params))
        .pipe(
          map((response) => {
            return deleteAdminUserComplete({payload: response});
          })
        )
    })
  ));
}
