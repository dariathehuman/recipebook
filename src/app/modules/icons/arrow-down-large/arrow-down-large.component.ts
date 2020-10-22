import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-arrow-down-large',
  templateUrl: './arrow-down-large.component.html'
})
export class ArrowDownLargeComponent implements OnInit {

  @Input() color = '#000000';

  constructor() { }

  ngOnInit(): void {
  }

}
