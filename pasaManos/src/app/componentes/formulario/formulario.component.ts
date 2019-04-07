import { Heroe } from './../../clases/heroe';

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormControl, FormGroup, Validator, Validators, RequiredValidator} from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() cargarDatos = new EventEmitter<Heroe>();
  miHeroe: Heroe; //Mi atributo heroe donde voy a guardar la lista de heroes;

  formularioHeroe: FormGroup; //aca declaro el objeto FormGroup, que me va a permitir controlar los formularios
  
  constructor() { 
    this.miHeroe = new Heroe();//Aca instancio mi objeto heroe
  }

  ngOnInit() {
    //Aca voy a instanciar mi objeto formgroup y todos sus componentes, va a tomar un array
    this.formularioHeroe = new FormGroup({
      /*estos van a ser del tipo formControl, que vendrian a ser textboxes, botones, etc*/
      id: new FormControl('',Validators.required),
      nombre: new FormControl('',
      [
        Validators.minLength(4), 
        Validators.required
      ]),
      sexo: new FormControl(''),
      poder: new FormControl(''),
      terreno: new FormControl('')
    });
  }
  public logear()
  {
    console.log(this.formularioHeroe.valid);
    this.cargarDatos.emit(this.formularioHeroe.value);
  }
}
