import {injectable} from 'inversify';
import { apis } from '../api/api-calls';

@injectable()
export class EdtService {

    constructor() {
    }

    generateData() {
    }

    
    getSummaryData(id: number): any {
        return "this.fileById(id)._summaryData;";
    }

    getSummary(id: number): any[] {
        return [];
    }

    getQueryTypes(category: string): string[] {
        return [];
    }

    getQueryDef(query: any): any {
        return "this.queryDefs[query.querySetName];";
    }
}
