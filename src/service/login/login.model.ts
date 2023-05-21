
export interface IResponseLoginUser {
    user_id: number,
    user_name: string,
    user_email: string
}

export interface IRequestLoginUser {
    email: string,
    password: string
}
