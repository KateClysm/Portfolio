import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogCompComponent } from './log-comp/log-comp.component';



@NgModule({
  declarations: [
  
    LogCompComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[LogCompComponent]
})
export class LoginModule { }
