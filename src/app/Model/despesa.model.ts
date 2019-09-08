
import { Category } from '../Model/category.model'

export class Expense {
    id: number=0;    
    name: string="";
    value: number=0;
    usuario_id: number=0;
    categoria: Category=null;

    constructor(){
        this.id=0
        this.name=''
        this.value=0
        this.usuario_id=0
        this.categoria=null
    }

}