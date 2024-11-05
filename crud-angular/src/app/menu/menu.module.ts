import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkMenuModule} from '@angular/cdk/menu';
import { Component} from '@angular/core';
import {
  CdkMenuItemRadio,
  CdkMenuItemCheckbox,
  CdkMenuGroup,
  CdkMenu,
  CdkMenuTrigger,
  CdkMenuItem,
  CdkMenuBar,
} from '@angular/cdk/menu';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, CdkMenuModule, Component, CdkMenuItemRadio,
    CdkMenuItemCheckbox,
    CdkMenuGroup,
    CdkMenu,
    CdkMenuTrigger,
    CdkMenuItem,
    CdkMenuBar
  ]
})
export class MenuModule { }
