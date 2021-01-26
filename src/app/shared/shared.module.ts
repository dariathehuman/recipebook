import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AlertComponent} from './alert/alert.component';
import {LoaderComponent} from './loader/loader.component';
import {PlaceholderDirective} from './placeholder.directive';

@NgModule({
  declarations: [
    AlertComponent,
    LoaderComponent,
    PlaceholderDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlertComponent,
    LoaderComponent,
    PlaceholderDirective,
    CommonModule
  ]
})

export class SharedModule {}
