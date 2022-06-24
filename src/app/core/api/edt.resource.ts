import {inject} from 'inversify';
import {EdtService} from '../api/edt.service';
import {apis,IAppConfig} from '../api/api-calls';
import {delayPromise} from '../../core/utils';
import * as path from 'path';
import * as express from 'express';
import * as fs from 'fs';
import {
    controller, httpDelete,
    httpGet,
    httpPost,
    queryParam,
    request,
    requestBody,
    requestParam,
    response
} from 'inversify-express-utils';
export async function downloadSample(res: express.Response, to = 0): Promise<any> {
    await delayPromise(0, to * 1000);
}

// @controller('')
export class EdtResource {
    private static errCounter = 0;

    constructor(@inject(EdtService) private service: EdtService) {
    }

    
    @httpGet(apis.config)
    async getAppConfig(): Promise<IAppConfig> {
        // throw new RestError(`MESSAGE`,['ERR1', 'ERR2'],409);
        return {
            'alfresco.url': 'http://localhost:10300',
            username: "CURRENT_USER",
            userPermissions: ['ManageInputData', 'LoadStageData', 'ReviewDataFiles']
        };
    }

 

    @httpGet(apis.queryTypes)
    async getQueryTypes(@requestParam('category') category: string): Promise<string[]> {
        return this.service.getQueryTypes(category);
    }


    @httpPost(apis.downloadData)
    async downloadData(@response() res: express.Response, @requestBody() body: any): Promise<any> {
        // throw new RestError('No data found',null,410);
        await downloadSample(res, 2);
    }

    @httpGet(apis.summaryOld)
    async getSummaryData(@requestParam('id') id: string): Promise<any> {
        return delayPromise(this.service.getSummaryData(+id), 1000);
    }

    @httpGet(apis.summary)
    async getSummary(@requestParam('id') id: string): Promise<any[]> {
        return delayPromise(this.service.getSummary(+id), 1000);
    }

    // @httpPost(apis.uploadData, upload.single('file'))
    // async upload(@request() req: Express.Request,
    //              @requestBody() body: Stringify<TUploadFormData>): Promise<IStatused> {
    //     const formData = <TUploadFormData>DataConverter.traverseInputCopy(body, true);
    //     console.warn('Upload:', req.file.originalname, formData);
    //     // if ((EdtResource.errCounter++) % 2) {
    //     //     throw new RestError(`File [${req.file.originalname}] could not be processed
    //     //     because it has a different posting date than the one selected in the UI. `, 409);
    //     // }
    //     await delayPromise(0, 2000);
    //     this.service.uploadFile(req.file.originalname, formData);
    //     return {status: 'SUCCESS'};
    // }

    
    // @httpPost(apis.uploadData)
    // async approveFile(@requestParam('fileId') fileId: string,
    //                   @queryParam() query: IApproveOrRejectQuery,
    //                   @requestBody() body: any): Promise<IStatused> {
    //     this.service.approveOrRejectFile(+fileId, 'approve', query);
    //     return {status: 'SUCCESS'};
    // }

    // @httpPost(apis.uploadData)
    // async rejectFile(@requestParam('fileId') fileId: string,
    //                  @queryParam() query: IApproveOrRejectQuery,
    //                  @requestBody() body: any): Promise<IStatused> {
    //     this.service.approveOrRejectFile(+fileId, 'reject', query);
    //     return {status: 'SUCCESS'};
    // }


}
