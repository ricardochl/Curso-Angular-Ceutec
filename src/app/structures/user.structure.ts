export interface IUser {
    uid: string,
    name: string,
    email : string,
    phone ?: string,
    address ?:string,
    avatar ?: any,
    admin : boolean,
    createdAt ?: any
}