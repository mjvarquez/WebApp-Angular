// user authentication and details
export interface User {
    id?: any,
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

// export interface Authentication {
//     id?: any,
//     firstName: string,
//     lastName: string,
//     email: string,
//     password: string,
//     role: string,
//     created_at?: string,
//     updated_at?: string
// }