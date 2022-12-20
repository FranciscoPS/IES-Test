import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { InputTextDialogComponent } from 'src/app/shared/components/Dialogs/inputTextDialog/inputTextDialog.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserComponent, NavbarComponent, InputTextDialogComponent],
  imports: [CommonModule, UserRoutingModule, MaterialModule, FormsModule],
})
export class UserModule {}
