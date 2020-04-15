import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { DrawComponent } from './draw/draw.component';


const routes: Routes = [{
  path: '',
  component: DrawComponent,
  children: [
    {
      path: 'draw',
      loadChildren: () => import('./draw/draw.module')
        .then(m => m.DrawModule),
    },
    { path: '', redirectTo: 'draw', pathMatch: 'full' },
    { path: '**', redirectTo: 'draw' },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
