import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Expense } from 'src/app/Model/despesa.model';
import { DespesaService } from 'src/app/Services/expense.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Input('despesa')
  despesa:Expense = new Expense()

  @Output()
  salvou = new EventEmitter<string>()

  constructor(private despesaService:DespesaService) {
    this.despesaService=despesaService
   }

  ngOnInit() {
    this.despesa.id=0
    this.despesa.name=''
    this.despesa.value=0
    this.despesa.categoria=null
  }

  salvar():void{
    console.log("clicou em salvar")
    this.salvou.emit("1")
    this.despesaService.setDespesa(this.despesa).subscribe(d=>this.despesa=d)
    
  }

}
