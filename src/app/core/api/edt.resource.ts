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

    // @httpGet(apis.queryTypes)
    // async getQueryTypes(@requestParam('category') category: string): Promise<string[]> {
    //     return this.service.getQueryTypes(category);
    // }

    // @httpGet(apis.queryDef)
    // async getQueryDef(@queryParam() query: TQueryDefQuery): Promise<IQueryDef> {
    //     return this.service.getQueryDef(query);
    // }

    // @httpPost(apis.downloadData)
    // async downloadData(@response() res: express.Response, @requestBody() body: TQueryDefExec): Promise<any> {
    //     // throw new RestError('No data found',null,410);
    //     await downloadSample(res, 2);
    // }

    // @httpGet(apis.summaryOld)
    // async getSummaryData(@requestParam('id') id: string): Promise<ISummaryData> {
    //     return delayPromise(this.service.getSummaryData(+id), 1000);
    // }

    // @httpGet(apis.summary)
    // async getSummary(@requestParam('id') id: string): Promise<ISummaryResponseItem[]> {
    //     return delayPromise(this.service.getSummary(+id), 1000);
    // }
}
