import { Component } from '@angular/core';

@Component({
  selector: 'app-empty-route',
  template: `<div class="wrapper">
  <router-outlet></router-outlet>
</div>`,
})
export class EmptyRouteComponent {
}
