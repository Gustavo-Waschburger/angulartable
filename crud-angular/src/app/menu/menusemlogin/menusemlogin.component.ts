import { Component } from '@angular/core';
import {
  CdkMenuItemRadio,
  CdkMenuItemCheckbox,
  CdkMenuGroup,
  CdkMenu,
  CdkMenuTrigger,
  CdkMenuItem,
  CdkMenuBar,
} from '@angular/cdk/menu';


@Component({
  selector: 'app-menusemlogin',
  standalone: true,
  imports: [CdkMenuItemRadio,
    CdkMenuItemCheckbox,
    CdkMenuGroup,
    CdkMenu,
    CdkMenuTrigger,
    CdkMenuItem,
    CdkMenuBar,],
  templateUrl: './menusemlogin.component.html',
  styleUrl: './menusemlogin.component.css'
})
export class MenusemloginComponent {

}
