import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RecipesComponent} from './recipes/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipesStartComponent} from './recipes/recipes-start/recipes-start.component';
import {RecipesDetailsComponent} from './recipes/recipes-details/recipes-details.component';
import {RecipesEditComponent} from './recipes/recipes-edit/recipes-edit.component';
import {RecipesResolverService} from './recipes/recipes-resolver.service';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full'
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      {
        path: '',
        component: RecipesStartComponent
      },
      {
        path: 'new',
        component: RecipesEditComponent
      },
      {
        path: ':id',
        component: RecipesDetailsComponent,
        resolve: [RecipesResolverService]
      },
      {
        path: ':id/edit',
        component: RecipesEditComponent,
        resolve: [RecipesResolverService]
      }
    ]
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
