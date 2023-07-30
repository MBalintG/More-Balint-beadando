import { Injectable } from '@angular/core';
import { Favorite } from './favorite.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favorites: Favorite[] = [];

  constructor() {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      this.favorites = JSON.parse(savedFavorites);
    }
  }

  getFavorites(): Favorite[] {
    return this.favorites;
  }

  addToFavorites(foodId: number, foodName: string) {
    const favorite: Favorite = { id: foodId, name: foodName };
    this.favorites.push(favorite);
    this.saveFavorites();
  }

  removeFromFavorites(foodId: number) {
    this.favorites = this.favorites.filter((favorite) => favorite.id !== foodId);
    this.saveFavorites();
  }

  private saveFavorites() {
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }
}