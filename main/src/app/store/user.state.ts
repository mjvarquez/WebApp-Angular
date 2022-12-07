// UserDetails & Registration
export interface User {
    id?: number,
    name: string,
    email: string,
    password?: string,
    role_id: string,
    uid?: string,
    status?: string,
    role?: string[],
}
export interface UserState {
    user: User[],
}
// Authentication
export interface AuthUser {
    email: string,
    password: string
}
export interface CurrentUserState {
    user: User | undefined,
    token: string
}
export interface AuthResponseData {
    access_token: string,
    expires_in: number,
    token_type: string
}