import { IUsuario } from "./iusuario.model";

export class Usuario implements IUsuario {
    id: number;    
    email: string;
    password: string;

    constructor(email:string, password:string){
        this.email=email
        this.password=password
    }

    

}