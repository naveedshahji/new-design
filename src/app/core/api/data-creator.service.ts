import {inject, injectable} from 'inversify';
import {EdtService} from './edt.service';

@injectable()
export class DataCreatorService {
    constructor(@inject(EdtService) private edtService: EdtService) {
    }

    create() {
        this.edtService.generateData();
    }

}
