import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    NavComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],

  //Qué componentes exportaremos a otros módulos 
  exports:[NavComponent, FooterComponent]
})
export class SharedModule { }



//Importar componentes de otros módulos: importar el módulo completo que contiene dichos componentes al módulo destino. 1)Agregar la referencia relativa al módulo   2)Referenciar en el array imports