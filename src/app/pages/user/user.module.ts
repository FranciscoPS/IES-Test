import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { AppRoutingModule } from './user-routing.module';

@NgModule({
  imports: [CommonModule, AppRoutingModule],
  declarations: [UserComponent],
})
export class UserModule {}
