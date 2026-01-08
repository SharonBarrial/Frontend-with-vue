import axios from 'axios'

export default axios.create({
  baseURL: 'https://freetestapi.com/',
  headers: {
    'Content-type': 'application/json'
  }
})