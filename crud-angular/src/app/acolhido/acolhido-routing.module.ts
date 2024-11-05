import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcolhidoComponent } from './acolhido-list/acolhido.component';

const routes: Routes = [
  {path : '', component: AcolhidoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcolhidoRoutingModule { }
