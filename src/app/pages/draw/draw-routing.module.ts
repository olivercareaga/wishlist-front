import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrawComponent } from './draw.component';
import { CreateDrawComponent } from './create-draw/create-draw.component';

const routes: Routes = [{
  path: '',
  component: DrawComponent,
  children: [
    {
      path: 'create-draw',
      component: CreateDrawComponent,
    },
    { path: '', redirectTo: 'create-draw', pathMatch: 'full' },
    { path: '**', redirectTo: 'create-draw' },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrawRoutingModule {
}

export const routedComponents = [
  DrawComponent,
  CreateDrawComponent
];
