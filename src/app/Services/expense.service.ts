import { Injectable } from '@angular/core';
import {Expense} from '../Model/despesa.model'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DespesaService {

  despesa:Expense
  despesas:Expense[]

  baseUrl = 'http://localhost:8080/mybudget'

  //mybudget/expense

  constructor(private http:HttpClient) { }

  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin': '**'
    })
  }

  public getDespesasByIdUsuario(idUsuario:number):Observable<Expense[]>{
    return this.http.get<Expense[]>(this.baseUrl+'/expense/usuario/'+idUsuario
                 ,this.httpOptions)
  }

  public setDespesa(despesa:Expense):Observable<Expense>{
    return this.http.put<Expense>(this.baseUrl+'/expense/',despesa,this.httpOptions)
          
  }



}
