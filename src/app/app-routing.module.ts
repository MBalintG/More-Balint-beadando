import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodDetailsComponent } from './food-details.component';

import { AllFoodsComponent } from './all-foods.component';


const routes: Routes = [
  { path: 'food/:id', component: FoodDetailsComponent },
  { path: 'all-foods', component: AllFoodsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
