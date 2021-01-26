import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-arrow-down-small',
  templateUrl: './arrow-down-small.component.html'
})
export class ArrowDownSmallComponent {
  @Input() color = '#000000';
}
