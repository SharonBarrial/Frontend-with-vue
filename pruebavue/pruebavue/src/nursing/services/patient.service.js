import http from "../../shared/services/http-common.js";

export class PatientService {
     getById(id) {
        return http.get(`/patients/${id}`);
    }
}