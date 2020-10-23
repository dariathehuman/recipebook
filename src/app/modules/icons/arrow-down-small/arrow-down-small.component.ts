import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-arrow-down-small',
  templateUrl: './arrow-down-small.component.html'
})
export class ArrowDownSmallComponent implements OnInit {

  @Input() color = '#000000';

  constructor() { }

  ngOnInit(): void {
  }

}
