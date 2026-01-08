import axios from 'axios'

export default axios.create({
  baseURL: 'https://restcountries.com',
  headers:{
    'Content-Type': 'application/json'
  }
})