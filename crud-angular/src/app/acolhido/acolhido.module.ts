import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { AcolhidoRoutingModule } from './acolhido-routing.module';
import { AcolhidoComponent } from './acolhido-list/acolhido.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AcolhidoRoutingModule,
    MatTableModule,
    AcolhidoComponent
  ]
})
export class AcolhidoModule { }
