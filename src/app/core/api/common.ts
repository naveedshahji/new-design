import {InjectionToken} from '@angular/core';

export interface IDataConverter {
    in(data: any): any;

    out(data: any): any;
}

/*
 Paging
 */


 export type TExtends<T, U extends T> = U;
 
 export interface IPage {
     size: number;
     totalElements: number;
     totalPages: number;
     number: number;
 }
 
 export interface IPageableResult<T> {
     content: T[];
     page: IPage;
 }
 
 export type TRequestSortOrder = 'asc' | 'desc';
 
 export interface IRequestSort {
     field: string;
     order: TRequestSortOrder;
 }
 
 export interface IPageRequest {
     page?: number;
     size?: number;
     sort?: IRequestSort[];
 }
 
 export type TPageRequestKeys = keyof IPageRequest;
 
 export const DEFAULT_PAGE_SIZE = 14;
 
 /*
  Miscellaneous
  */
 export interface INamed {
     name: string;
 }
 
 export interface IExisted {
     exists: boolean;
 }
 
 export interface ITenanted {
     tenant: string;
 }
 
 export interface IStatused {
     status: 'SUCCESS' | 'FAILED';
 }
 
 export const TENANT_QUERY_PARAM = 'tenant';

 
export const HTTP_DATA_CONVERTER_TOKEN = new InjectionToken('httpDataConverter');

