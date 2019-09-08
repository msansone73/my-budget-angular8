import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {retry,catchError, tap} from 'rxjs/operators'
import {IUsuario} from '../Model/iusuario.model'
import {Usuario} from '../Model/usuario.model'


@Injectable({
  providedIn: 'root'
})
export class SegurancaService {

   usuario:Usuario

  baseUrl = 'http://localhost:8080/mybudget/security'
  constructor(private http:HttpClient){}

  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin': '**'
    })
  }
  
  public login(email:string, senha:string):Observable<Usuario> {

    let usuario:IUsuario = new Usuario(email,senha)
    return this.http.post<Usuario>(this.baseUrl+'/user/login/'
                            , usuario
                            , this.httpOptions)
  }


}
