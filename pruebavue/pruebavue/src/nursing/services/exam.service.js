import http from "../../shared/services/http-common.js";

export class ExamService {
    getAll(){
        return http.get("/mental-state-exams");
    }
}