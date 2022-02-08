import { Component } from '@angular/core';

@Component({
  selector: 'clo-root',
  template: `
      <div (clickOutside)="onClickOutside()">
        <p>
          {{ message }}
        </p>
      </div>
    `,
  styles: ['div { border: 1px solid; }']
})
export class AppComponent {
  message = 'Click outside me!';

  onClickOutside(): void {
    this.message = 'Click detected!';
  }
}
