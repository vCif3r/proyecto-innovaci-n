export interface IUsuario {
    _id?: number;
    avatar: string;
    username : string;
    roles: [string];
    email: string;
    password?: string;
}
