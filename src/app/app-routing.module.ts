import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import { HomeComponent } from "./components/home/home.component";
import { SobreComponent } from './components/sobre/sobre.component';
import { LoginComponent } from './components/login/login.component';
import { ListaComponent } from './components/despesa/lista/lista.component';



const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'login', component:LoginComponent},
  {path: 'despesa/lista', component:ListaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
