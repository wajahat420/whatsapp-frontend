import axios from 'axios'

// const BASE_URL = 'http://localhost:5000/'
const BASE_URL = 'https://wajahatsarwat.com/whatsapp-backend/'

const API = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default API
