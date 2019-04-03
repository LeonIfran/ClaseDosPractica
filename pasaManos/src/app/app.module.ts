import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { GrillaComponent } from './componentes/grilla/grilla.component';
import { FilaheroesComponent } from './componentes/filaheroes/filaheroes.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    GrillaComponent,
    FilaheroesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
