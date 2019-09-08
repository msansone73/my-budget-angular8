import { Component, OnInit } from '@angular/core';
import { SegurancaService } from 'src/app/Services/seguranca.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-info',
  templateUrl: './login-info.component.html',
  styleUrls: ['./login-info.component.css']
})
export class LoginInfoComponent implements OnInit {

  usuario:string=''
  segurancaService: SegurancaService
  cookieService:CookieService
  estalogado: boolean =false

  constructor(private segurancaService_: SegurancaService
              ,private cookieService_:CookieService) {
    this.segurancaService=segurancaService_
    this.cookieService=cookieService_
   }

  ngOnInit() {
    console.log("this.cookieService.get(usuario)="+this.cookieService.get('usuario'))
    if (this.cookieService.get("usuario").length>0){
      this.estalogado = true
    } else {
      this.estalogado = false
    }     
  }

  logout():void{
    this.cookieService.delete("usuario")
    this.cookieService.delete("idusuario")
    this.cookieService.deleteAll
    this.segurancaService.usuario=null    
    console.log("logout ok.")
  }



}
