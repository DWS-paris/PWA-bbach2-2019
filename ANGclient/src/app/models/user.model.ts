export interface UserModel{
    first_name?: string,
    last_name?: string,
    email: string,
    password: string,
    password_repeate?: string,
    street?: string,
    city?: string,
    country?: string,
    zip_code?: string,
    birthdate?: string,
    position?: string,
    type?: string,
    cgu?: boolean
}