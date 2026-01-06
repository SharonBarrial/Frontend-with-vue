import http from "../../shared/services/http-common.js";

export class ExaminerService {

    getById(id) {
        return http.get(`/examiners/${id}`);
    }
}