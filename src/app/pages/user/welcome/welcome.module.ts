import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { CambioLetrasPipe } from 'src/app/shared/pipes/cambioLetras.pipe';

@NgModule({
  declarations: [WelcomeComponent, CambioLetrasPipe],
  imports: [CommonModule, WelcomeRoutingModule],
})
export class WelcomeModule {}
