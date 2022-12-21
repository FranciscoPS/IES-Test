import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { FormRoutingModule } from './form-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/modules/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [FormComponent]
})
export class FormModule { }
