import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbStepperModule } from '@nebular/theme';

import { DrawRoutingModule, routedComponents } from './draw-routing.module';


const components = [];

@NgModule({
  declarations: [
    ...components,
    ...routedComponents
  ],
  imports: [
    CommonModule,
    NbStepperModule,
    DrawRoutingModule
  ]
})
export class DrawModule { }
