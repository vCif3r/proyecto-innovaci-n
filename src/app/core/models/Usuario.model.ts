export interface IUsuario {
    _id?: string;
    avatar: string;
    username : string;
    roles: [string];
    email: string;
    password?: string;
}
