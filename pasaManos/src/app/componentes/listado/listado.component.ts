import { Component, OnInit } from '@angular/core';
import { Dato } from './../dato';
import { Heroe } from 'src/app/clases/heroe';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  miDato;
  listado: Array<Heroe>;
    constructor() 
    { 
      this.miDato = new Dato();
      this.listado = this.miDato.lista;

    }
  /**
   * cargar Esto va a agregar los datos recibidos del formulario a la lista de heroes
   */
  public cargar(dato: Heroe) {
    this.listado.push(dato);
  }
  ngOnInit() {
  }

}
