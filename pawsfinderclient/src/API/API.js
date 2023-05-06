const BASE_URL = process.env.SERVER_BASE_IP

export const API = {
    login: `${BASE_URL}/app/user/login`,
    signUp: `${BASE_URL}/app/user/sign-up`,
    postBoard: `${BASE_URL}/app/board`,
    getBoard: `${BASE_URL}/app/board`,
}