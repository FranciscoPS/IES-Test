import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';

@NgModule({
  declarations: [UserComponent, NavbarComponent],
  imports: [CommonModule, UserRoutingModule, MaterialModule],
})
export class UserModule {}
