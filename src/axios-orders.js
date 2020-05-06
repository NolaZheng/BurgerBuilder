import axios from 'axios'

const instance = axios.create({
    baseURL : 'https://myburger-7154f.firebaseio.com/'
})

export default instance