import {INamed, IPageableResult} from './common';
 

export const apis = {
    queryTypes: '/evolv/ods/queries/:usageType/querysets/names',
    queryDef: '/evolv/ods/queries/queryset/parameters',
    downloadData: '/evolv/ods/queries/queryset/execute',
    uploadData: '/evolv/ods/fileupload/upload',
    uploadedFiles: '/evolv/ods/fileuploadlogs/search/all?size=14&page=0&sort=uploadTime,asc&tenant=TENANT_DEV',
    uploadedFilesFilter: '/evolv/ods/fileuploadlogs/search/likefilename',
    uploadedFile: '/evolv/ods/fileuploadlogs/:id',
    uploadedFilesSearch: '/evolv/ods/fileuploadlogs/search/byfilename',
    config: '/evolv/ods/fileupload/config',
    latestPosting: '/evolv/ods/fileupload/latestPosting',
    summaryOld: '/evolv/ods/fileupload/audit/summaryOld/:id',
    summary: '/evolv/ods/fileupload/audit/summary/:id',
    downloadFileChanges: '/evolv/ods/fileupload/download/filechanges/:id',
    downloadExceptions: '/evolv/ods/fileupload/download/exceptions/:id',
};

export interface IAppConfig {
    'alfresco.url': string;
    username: string;
    userPermissions: TRoles[];
}

export type TQueryDefItemType = 'string' | 'number' | 'date';

export interface IQueryDefItem extends INamed {
    label: string;
    type: TQueryDefItemType;
    multiValue: boolean;
    values: (string | number | Date)[];
    description: string;
}

export interface IQueryDef {
    name: string;
    usageType: string;
    parameters: IQueryDefItem[];
}

export type TQueryDefQuery = Pick<IQueryDef, 'usageType'> & {
    querySetName: string;
};

export type TQueryDefExec = Pick<IQueryDef, 'name' | 'usageType'> & {
    parameters: string | string[];
    outputType?: 'xlsx';
};

export const DEFAULT_QUERY_DEF_CATEGORY = 'EDT';

export const UPLOADED_FILE_STATUS = {
    processing: 'Processing',
    preliminaryProcessingCompleted: 'Preliminary Processing Completed',
    completed: 'Completed',
    pendingReview: 'Pending Review',
    rejected: 'Rejected',
    approved: 'Approved',

    failed: 'Failed',
    fileUploadFailed: 'File Upload Failed',
    received: 'Received',
    preliminaryProcessing: 'Preliminary Processing',
    preliminaryProcessingFailed: 'Preliminary Processing Failed'

} as const;

export type TUploadedFileStatus = (typeof UPLOADED_FILE_STATUS)[keyof typeof UPLOADED_FILE_STATUS];

export const DATA_PROCESSING_TYPES = [ 'OVERWRITE', 'DELETE', 'APPEND', 'REPLACE'] as const;
export type TDataProcessingType = typeof DATA_PROCESSING_TYPES[number];

export interface IUploadedFile {
    id: number;
    uploadedFileName: string;
    uploadedFilePath: string;
    uploadTime: Date;
    postingDate: Date;
    uploadedBy: string;
    changes: number;
    exceptions: number;
    status: TUploadedFileStatus;
    comments?: string;
    reviewComments?: string;
    reviewedBy: string;
    impactedTables: string | null;
    dataProcessingType: TDataProcessingType;
    uploadError?: string;
}

export type TUploadDataProcessingType = 'overwrite'| 'delete' | 'append';

export type TUploadFormData = Pick<IUploadedFile, 'postingDate' | 'comments'> & {
    dataProcessingType: TUploadDataProcessingType;
};

// export type TRIUploadedFilesQuery = IRIPageRequest & TUploadedFilesQueryAddon;
// export type TRIUploadedFiles = IPageableResult<IUploadedFile>;


export type TApproveOrRejectAction = 'approve' | 'reject';
export interface IApproveOrRejectQuery {
    comment?: string;
}

export type TFileAction = 'delete' | 'withdraw' | 'submit';

export interface ILatestPosting {
    latestPostingDate: Date;
    postAccIMUpdate: boolean;
}

export const ROLES = ['ManageInputData', 'LoadStageData', 'ReviewDataFiles'];
export type TRoles = typeof ROLES[number];

export const DEV_LOGOUT_URL =  '/evolv/ods/logout'; // used in dev mode only; taken from keycloak.auth in prod mode

export interface ISummaryRecord {
    total: number;
    TableName: string;
}

// tslint:disable-next-line
export interface IExceptionSummaryRecord extends ISummaryRecord {
}

export interface IChangeSummaryRecord extends  ISummaryRecord {
    ChangeType: string;
}

export type TChangeSummaryName = 'File Changes' | 'BRE Changes';
export type TExceptionSummaryName = 'Errors' | 'Warnings';

export interface ISummary<N, R extends ISummaryRecord> {
    name: N;
    total: number;
    records: R[];
}

export interface ISummaryData {
    ChangeSummary: ISummary<TChangeSummaryName, IChangeSummaryRecord>[];
    ExceptionSummary: ISummary<TExceptionSummaryName, IExceptionSummaryRecord>[];
}

export interface ISummaryFileChanges {
    fileInserts?: number;
    fileDeletes?: number;
    fileUpdates?: number;
    sdaInserts?: number;
    sdaDeletes?: number;
    sdaUpdates?: number;
}

export interface ISummaryBREChanges {
    breInserts?: number;
    breDeletes?: number;
    breUpdates?: number;
}

export interface ISummaryErrors {
    errors?: number;
}

export interface ISummaryWarnings {
    warnings?: number;
}

export interface ISummaryResponseItem extends ISummaryFileChanges, ISummaryBREChanges, ISummaryErrors, ISummaryWarnings {
    tableName: string;
}

export type TDownloadFileFormat = 'pdf' | 'excel';

export interface IDownloadFormatQuery {
    format: TDownloadFileFormat;
}
