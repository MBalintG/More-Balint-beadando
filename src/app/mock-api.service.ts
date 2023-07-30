import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FoodCategory, FoodItem } from './food-category.model';

@Injectable({
  providedIn: 'root'
})
export class MockApiService {
  private foodCategories: FoodCategory[] = [
   
  ];

  getAllFoods(): Observable<FoodItem[]> {
    const allFoods: FoodItem[] = this.foodCategories.reduce((acc, category) => [...acc, ...category.foods], []);
    return of(allFoods);
  }
}