
import { TOKEN_KEY } from '@/utils/constants'

export function getToken() {
    return localStorage.getItem(TOKEN_KEY);
}

export function setToken(token) {
    return localStorage.setItem(TOKEN_KEY, token)
}

export function clearToken() {
    return localStorage.removeItem(TOKEN_KEY)
}

export function setUser(user) {
    return localStorage.setItem('music-user', JSON.stringify(user));
}

export function getUser() {
    return JSON.parse(localStorage.getItem('music-user'));
}

export function removeUser() {
    return localStorage.removeItem('music-user');
}