import {NgModule} from '@angular/core';
import {RecipesComponent} from './recipes.component';
import {RecipesListComponent} from './recipes-list/recipes-list.component';
import {RecipesDetailsComponent} from './recipes-details/recipes-details.component';
import {RecipesItemComponent} from './recipes-list/recipes-item/recipes-item.component';
import {RecipesStartComponent} from './recipes-start/recipes-start.component';
import {RecipesEditComponent} from './recipes-edit/recipes-edit.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {IconsModule} from '../modules/icons/icons.module';
import {RecipesRoutingModule} from './recipes-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailsComponent,
    RecipesItemComponent,
    RecipesStartComponent,
    RecipesEditComponent
  ],
  imports: [
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    IconsModule,
    RecipesRoutingModule
  ]
})

export class RecipesModule {}
