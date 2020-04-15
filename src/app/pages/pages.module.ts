import { NgModule } from '@angular/core';
import { NbLayoutModule } from '@nebular/theme';
import { PagesRoutingModule } from './pages-routing.module';

import { PagesComponent } from './pages.component';


@NgModule({
  declarations: [PagesComponent],
  imports: [
    NbLayoutModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
