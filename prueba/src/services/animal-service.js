import http from './http-common.js';

class GetApiService {
    getAllAnimals() {
        return http.get('api/v1/animals/');
    }
    getAnimalById(id) {
        return http.get(`api/v1/animals/${id}`);
    }
}

export default new GetApiService();
