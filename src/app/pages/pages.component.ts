import { Component } from '@angular/core';

@Component({
  selector: 'app-pages',
  template: `
    <nb-layout>
      <router-outlet></router-outlet>
    </nb-layout>
  `,
})
export class PagesComponent {
}
