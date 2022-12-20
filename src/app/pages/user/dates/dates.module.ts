import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatesComponent } from './dates.component';
import { DatesRoutingModule } from './dates-routing.module';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DatesRoutingModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [DatesComponent]
})
export class DatesModule { }
