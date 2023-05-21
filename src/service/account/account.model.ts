
export interface IResponseAccountData {
    account_id: number,
    balance: number,
    created_at: string
}


export interface IRequestCreateAccount {
    initial_amount: number,
    user_id: number
}
