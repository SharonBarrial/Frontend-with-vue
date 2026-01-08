import axios from "axios";

const http = axios.create({
  baseURL: 'http://universities.hipolabs.com/search?country=peru'
});

class UniversityApiService {
  getUniversities() {
    return http.get('');
  }
}

export default new UniversityApiService();