import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SegurancaService } from './Services/seguranca.service';
import { LoginInfoComponent } from './components/seguranca/login-info/login-info.component';
import { ListaComponent } from './components/despesa/lista/lista.component';
import { CookieService } from 'ngx-cookie-service';
import { EditComponent } from './components/despesa/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    SobreComponent,
    LoginComponent,
    LoginInfoComponent,
    ListaComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SegurancaService,
              CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
