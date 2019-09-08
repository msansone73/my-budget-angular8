import { Component, OnInit } from '@angular/core';
import { SegurancaService } from 'src/app/Services/seguranca.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  
  constructor(private segurancaService: SegurancaService) {
    this.segurancaService=segurancaService
   }

  ngOnInit() {
  }

}
