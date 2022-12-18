import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversionsComponent } from './conversions.component';
import { ConversionsRoutingModule } from './conversions-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ConversionsRoutingModule
  ],
  declarations: [ConversionsComponent]
})
export class ConversionsModule { }
