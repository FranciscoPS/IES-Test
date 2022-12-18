import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConversionsComponent } from './conversions.component';

const routes: Routes = [{ path: '', component: ConversionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConversionsRoutingModule {}
