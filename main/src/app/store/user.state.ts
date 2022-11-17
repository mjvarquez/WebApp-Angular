// user authentication and details
export interface User {
    id?: any,
    firstName: string,
    lastName: string,
    email: string,
    userType: string,
    uid?: string,
}

export interface Authentication {
    id?: any,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    userType: string,
}