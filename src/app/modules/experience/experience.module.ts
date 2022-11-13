import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpCompComponent } from './exp-comp/exp-comp.component';



@NgModule({
  declarations: [
    ExpCompComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ExpCompComponent]
})
export class ExperienceModule { }
