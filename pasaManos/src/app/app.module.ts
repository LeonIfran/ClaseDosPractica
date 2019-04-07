import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { GrillaComponent } from './componentes/grilla/grilla.component';
import { FilaheroesComponent } from './componentes/filaheroes/filaheroes.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';






@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    GrillaComponent,
    FilaheroesComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
