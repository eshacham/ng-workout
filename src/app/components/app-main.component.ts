import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <app-nav-bar></app-nav-bar>
    <router-outlet></router-outlet>
  `
})
export class AppMainComponent {
}
