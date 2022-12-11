import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
//
import { BrowserModule } from '@angular/platform-browser';
//
import { HttpClientModule } from '@angular/common/http';
//
import { FormsModule } from '@angular/forms';
//Rutas
import { AppRoutingModule } from './app-routing.module';
//Components
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreditsComponent } from './components/credits/credits.component';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { Page404Component } from './components/page404/page404.component';
//


//Angular define los módulos como clases a través del decorador @NgModule.
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    CreditsComponent,
    HomeComponent,
    InfoComponent,
    ExperienceComponent,
    ContactComponent,
    LoginComponent,
    Page404Component
  ],
  //Modulos necesarios para que éste módulo funcione correctamente
    imports: [
    BrowserModule, //
    HttpClientModule, //
    AppRoutingModule, //módulo de rutas
    BrowserModule,
    FormsModule, 
    
  ],
  //Proveedores de servicios necesarios
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
