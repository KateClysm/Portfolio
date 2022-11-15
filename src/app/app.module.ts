import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

//Rutas
import { AppRoutingModule } from './app-routing.module';
//Components
import { NavComponent } from './components/nav/nav.component';
import { InfoComponent } from './components/info/info.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';

//Angular define los módulos como clases a través del decorador @NgModule.
@NgModule({
  //Componenttes u otros artefactos que incluye este módulo
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    InfoComponent,
    FooterComponent,
    ExperienceComponent,
    ContactComponent,
    LoginComponent
  ],
  //Modulos necesarios para que el módulo funcione correctamente
    imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  //Proveedores de servicios necesarios
  providers: [],
  bootstrap: [AppComponent]
})
//Componentes exportados hacia fuera del módulo.
export class AppModule { }
