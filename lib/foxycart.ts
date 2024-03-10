import axios from 'axios'

const CLIENT_ID = process.env.NEXT_PUBLIC_FOXY_CLIENT_ID ?? ''
const CLIENT_SECRET = process.env.NEXT_PUBLIC_FOXY_CLIENT_SECRET ?? ''
const REFRESH_TOKEN = process.env.NEXT_PUBLIC_FOXY_REFRESH_TOKEN ?? ''
const BASE_URL = process.env.NEXT_PUBLIC_FOXY_BASE_URL

export const refreshToken = async () => {
    try {
        const response = await axios.post(`${BASE_URL}/token`, {
            grant_type: 'refresh_token',
            refresh_token: REFRESH_TOKEN,
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
        })

        const { access_token } = response.data
        return access_token
    } catch (error) {
        console.error('Error refreshing token:', error)
        return null
    }
}

export const foxyApiWithRefresh = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

foxyApiWithRefresh.interceptors.request.use(
    async (config) => {
        // Add the access token to every request
        if (config.headers) {
            config.headers['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    },
)

foxyApiWithRefresh.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true
            const newAccessToken = await refreshToken()
            if (newAccessToken) {
                localStorage.setItem('access_token', newAccessToken)
                axios.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`
                return foxyApiWithRefresh(originalRequest)
            }
        }
        return Promise.reject(error)
    },
)

export const getCartItems = async () => {
    try {
        const response = await foxyApiWithRefresh.get('/carts') // Adjust the endpoint as needed
        console.log('entered, ', response.data)
        return response.data
    } catch (error) {
        console.error('Error fetching cart items:', error)
        return null
    }
}
