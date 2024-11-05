import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [
  {path: '' , redirectTo:'acolhidos'},
  {
    path: 'acolhido',
    loadChildren: () => import('./acolhido/acolhido.module').then(m => m.AcolhidoModule)
  }
]

NgModule({
  imports: [RouterModule.forRoot(route) ],
  exports: [RouterModule]
})

export const routes: Routes = [];
