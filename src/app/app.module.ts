import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './modules/shared/shared.module';
import { BanerModule } from './modules/baner/baner.module';
import { ContactModule } from './modules/contact/contact.module';

//Angular define los módulos como clases a través del decorador @NgModule.
@NgModule({

  //Componenttes u otros artefactos que incluye este módulo
  declarations: [
    AppComponent
  ],

  //Clases necesarias para que el módulo funcione correctamente
    imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    SharedModule,
    BanerModule,
    ContactModule
  ],

  //Proveedores de servicios necesarios
  providers: [],

  //Componente raíz que Angular crea e inserta en la página web de host index.html
  bootstrap: [AppComponent]
})

//Componentes exportados hacia fuera del módulo.
export class AppModule { }
