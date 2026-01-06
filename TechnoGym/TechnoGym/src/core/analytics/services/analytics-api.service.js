import http from '@/core/shared/services/http-common.js'

class AnalyticsApiService {
  getCentersAndTheirTreadmills() {
    return http.get('/api/v1/centers?_embed=treadmills')
  }

  getTreadmillsAndTheirHealthChecks() {
    return http.get('/api/v1/treadmills?_embed=health-checks')
  }

  getHealthChecks() {
    return http.get('/api/v1/health-checks')
  }
}

export default new AnalyticsApiService()