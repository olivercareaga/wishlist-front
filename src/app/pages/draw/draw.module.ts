import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbStepperModule, NbCardModule } from '@nebular/theme';

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
    NbCardModule,
    FormsModule,
    ReactiveFormsModule,
    DrawRoutingModule
  ]
})
export class DrawModule { }
