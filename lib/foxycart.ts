import axios from 'axios'

const CLIENT_ID = process.env.NEXT_PUBLIC_FOXY_CLIENT_ID ?? ''
const CLIENT_SECRET = process.env.NEXT_PUBLIC_FOXY_CLIENT_SECRET ?? ''
const REFRESH_TOKEN = process.env.NEXT_PUBLIC_FOXY_REFRESH_TOKEN ?? ''

export const refreshToken = async () => {
    try {
        const response = await axios.post('https://api.foxycart.com/token', {
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
