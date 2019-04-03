import { Component, OnInit } from '@angular/core';
import { Dato } from './../dato';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  miDato;
  listado;
    constructor() 
    { 
      this.miDato = new Dato();
      this.listado = this.miDato.lista;

    }

  ngOnInit() {
  }

}
