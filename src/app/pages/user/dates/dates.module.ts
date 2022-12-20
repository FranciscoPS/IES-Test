import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatesComponent } from './dates.component';
import { DatesRoutingModule } from './dates-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DatesRoutingModule
  ],
  declarations: [DatesComponent]
})
export class DatesModule { }
