import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConCompComponent } from './con-comp/con-comp.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ConCompComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[ConCompComponent]
})
export class ContactModule { }
