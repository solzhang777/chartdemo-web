import http from '@/util/method.service';
import CoachInfo from '@/models/coach.model';
import {AxiosResponse} from 'axios';

class CoachService {

    public async getAll(): Promise<AxiosResponse<CoachInfo[]>> {
        return await http.fetchGet<CoachInfo[]>('/coach/api/get');
    }
}

export default new CoachService();
