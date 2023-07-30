import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { FoodCategory, FoodItem } from './food-category.model';
import { FoodDetailsComponent } from './food-details/food-details.component';
import { AllFoodsComponent } from './all-foods/all-foods.component';


@NgModule({
  declarations: [AppComponent, FoodDetailsComponent, AllFoodsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}