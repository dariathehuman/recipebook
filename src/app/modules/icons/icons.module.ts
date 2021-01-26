import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArrowDownLargeComponent } from './arrow-down-large/arrow-down-large.component';
import { ArrowDownSmallComponent } from './arrow-down-small/arrow-down-small.component';

@NgModule({
  declarations: [
    ArrowDownLargeComponent,
    ArrowDownSmallComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ArrowDownLargeComponent,
    ArrowDownSmallComponent
  ]
})
export class IconsModule {}
