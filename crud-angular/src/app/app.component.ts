import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AcolhidoModule } from './acolhido/acolhido.module';
import { MenusemloginComponent } from './menu/menusemlogin/menusemlogin.component';
import { ToolbarBasic } from './toolbar/toolbar.component';
import { AcolhidoComponent } from "./acolhido/acolhido-list/acolhido.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule , ToolbarBasic,
    MenusemloginComponent, AcolhidoModule,
    AcolhidoComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Crud-Angular';
}
