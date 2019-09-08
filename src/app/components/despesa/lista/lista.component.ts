import { Component, OnInit } from '@angular/core';
import { SegurancaService } from 'src/app/Services/seguranca.service';
import { DespesaService } from 'src/app/Services/expense.service';
import { Expense } from 'src/app/Model/despesa.model';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  idusuario:number=0
  despesas:Expense[]
  editDespesa:Expense = new Expense()
  showEdit:Boolean=false


  constructor(private segurancaService:SegurancaService
              ,private despesaService:DespesaService
              ,private cookieService:CookieService) {
  this.despesaService=despesaService
  this.segurancaService=segurancaService
  this.cookieService=cookieService
  }

  ngOnInit() {
    if (this.cookieService.get("idusuario")!=''){
      this.idusuario=Number(this.cookieService.get("idusuario"))

    }
    if (this.idusuario!=0){
      this.despesaService.getDespesasByIdUsuario(this.idusuario)
              .subscribe(d=>this.despesas=d)
    }
  }

  editarDespesa(edDespesa:Expense):void{
    this.editDespesa=edDespesa
    this.showEdit=true
  }

  onSalvou(e){
    console.log("FOI!!!")
    console.log("e= "+e)
    this.showEdit=false
    
  }



}
