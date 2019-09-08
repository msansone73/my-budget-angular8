import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import {SegurancaService} from '../../Services/seguranca.service'
import { EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Model/usuario.model';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  xemail:string=''
  xsenha:string=''
  usuario:Usuario
  cookieValue = 'UNKNOWN'

  constructor(private router:Router
              ,private segurancaService: SegurancaService
              , private cookieService:CookieService) {
    this.segurancaService=segurancaService
   }

   onLogin(e){
     e.preventDefault() 
     this.segurancaService.login(this.xemail,this.xsenha).subscribe(u=>
      {
        this.usuario = u
        if (u!=null){
          this.cookieService.set("usuario",u.email) 
          this.cookieService.set("idusuario",String(u.id))          
        }
      }
      )
     this.router.navigate(["/home"])
  }
    
  ngOnInit() {
    
  }

}
