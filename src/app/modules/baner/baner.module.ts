import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BanCompComponent } from './ban-comp/ban-comp.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    BanCompComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[BanCompComponent]
})
export class BanerModule { }

