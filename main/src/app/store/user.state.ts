// user authentication and details
export interface User {
    id?: any,
    firstName: string,
    lastName: string,
    email: string,
    password?: string,
    role: string,
    uid?: string,
}

export interface Authentication {
    id?: any,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    role: string,
    created_at?: string,
    updated_at?: string
}