import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './componentes/nav/nav.component';
import { BanerComponent } from './componentes/baner/baner.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { SobremiComponent } from './componentes/sobremi/sobremi.component';
import { HttpClientModule } from '@angular/common/http';
import { AccesoComponent } from './componentes/acceso/acceso.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BanerComponent,
    ExperienciaComponent,
    ContactoComponent,
    FooterComponent,
    SobremiComponent,
    AccesoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
