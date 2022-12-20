import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { AppRoutingModule } from './user-routing.module';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';

@NgModule({
  declarations: [UserComponent, NavbarComponent],
  imports: [CommonModule, AppRoutingModule, MaterialModule],
})
export class UserModule {}
