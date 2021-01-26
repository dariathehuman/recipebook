import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-arrow-down-large',
  templateUrl: './arrow-down-large.component.html'
})
export class ArrowDownLargeComponent {
  @Input() color = '#000000';
}
