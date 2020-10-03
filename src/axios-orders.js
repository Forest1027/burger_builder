import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-my-burger-ba3ee.firebaseio.com/'
})

export default instance;