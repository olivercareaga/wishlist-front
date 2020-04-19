import { NgModule } from '@angular/core';
import { NbLayoutModule, NbThemeModule } from '@nebular/theme';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';


@NgModule({
  declarations: [PagesComponent],
  imports: [
    NbThemeModule,
    NbLayoutModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
