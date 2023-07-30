
import { Component, HostListener } from '@angular/core';


import { Router } from '@angular/router';
import { FoodCategory, FoodItem } from './food-category.model';

import { FavoritesService } from './favorites.service';

import { MockApiService } from './mock-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  foodCategories: FoodCategory[] = [];
  allFoods: FoodItem[] = [];

  constructor(private mockApiService: MockApiService) {}

  ngOnInit() {
    this.mockApiService.getAllFoods().subscribe((foods: FoodItem[]) => {
      this.allFoods = foods;
    });
  }

  isSticky = false;
  isMenuOpen = false;
  isMobile = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.pageYOffset >= 50;
  }

  @HostListener('window:resize', [])
  onWindowResize() {
    this.isMobile = window.innerWidth < 768; 
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  

  foodCategories: FoodCategory[] = [
    {
      id: 1,
      name: 'pizzák',
      description: 'pizzák kategória',
      foods: [
        {
          name: 'Margaréta',
          description: 'Töltött szél, paradicsomos alap, mozzarella, paradicsom',
          image: 'https://domdombufe.hu/pictures/pizzak/margareta.jpg'
        },
        {
          name: 'Szalámis',
          description: 'Töltött szél, paradicsomos alap, szalámi, mozzarella',
          image: 'https://domdombufe.hu/pictures/pizzak/szalamis.jpg'
        },
        {
          name: 'SonGoKu',
          description: 'Töltött szél, paradicsomos alap, sonka, gomba, kukorica, mozzarella',
          image: 'https://domdombufe.hu/pictures/pizzak/songoku.jpg'
        },
        {
          name: 'Anonymus',
          description: 'Töltött szél,tejfölös alap, csirkemell kocka, bacon, vöröshagyma, füstölt sajt, mozzarella',
          image: 'https://domdombufe.hu/pictures/pizzak/anonymus.jpg'
        },
        {
          name: 'Görög',
          description: 'Töltött szél, paradicsomos alap, paradicsom, olíva, feta, mozzarella',
          image: 'https://domdombufe.hu/pictures/pizzak/gorog.jpg'
        },
        {
          name: 'Hawaii',
          description: 'Töltött szél, paradicsomos alap, sonka, ananász, mozzarella',
          image: 'https://domdombufe.hu/pictures/pizzak/hawaii.jpg'
        },
        {
          name: 'Boss ',
          description: 'Töltött szél, sajtszósz alap, mozzarella, füstölt sajt, sonka, bacon, csemege uborka',
          image: 'https://domdombufe.hu/pictures/pizzak/boss.jpg'
        },
        {
          name: 'Tengeriherkentyű',
          description: 'Töltött szél, paradicsomos alap, olíva, tintahal, rák, kagyló, mozzarella',
          image: 'https://domdombufe.hu/pictures/pizzak/tengeri-herkentyu.jpg'
        },
        {
          name: 'Bianco',
          description: 'Töltött szél, tejfölös alap, csirkemell, lilahagyma, kukorica, mozzarella',
          image: 'https://domdombufe.hu/pictures/pizzak/bianco.jpg'
        },
        {
          name: 'Bolognai',
          description: 'Töltött szél, bolognai ragu, paradicsom, mozzarella',
          image: 'https://domdombufe.hu/pictures/pizzak/bolognai.jpg'
        },
      ]
    },
    {
      id: 2,
      name: 'Tál ételek',
      description: 'Tál ételek kategória',
      foods: [
        {
          name: '4 személyes',
          description: '2 szelet rántott csirkemell, 2 szelet roston csirkemell, 2 szelet rántott sajt, 2 szelet roston tarja, 10 db hagymakarika, hasábburgonya, rizs',
          image: 'https://domdombufe.hu/pictures/taletelek/normaltal.jpg'
        },
        {
          name: 'Csirkeszárny box',
          description: '16 részes rántott csirkeszárny 2 választható öntettel, választható körettel(hasáb/rizs)',
          image: '	https://domdombufe.hu/pictures/csirkeszarnybox.jpg'
        },
        {
          name: 'Panírozott karaj tálon',
          description: '2 szelet rántott karaj, választható köret (hasáb/rizs)',
          image: 'https://domdombufe.hu/pictures/karajtal.jpg'
        },
        {
          name: 'Vasalt csirkecomb tál',
          description: '2 szelet vasalt csirkecomb filé(alsó felső rész nyitva) (hasáb/rizs), lilahagyma, paradicsom, jégsaláta, uborka, tzatziki',
          image: 'https://domdombufe.hu/pictures/vasaltcomb.jpg'
        },
        {
          name: 'Panírozott csirkecomb tál',
          description: '2 szelet rántott csirkecomb filé(alsó felső rész nyitva, választható köret (hasáb/rizs), lilahagyma, paradicsom, jégsaláta, uborka, tzatziki',
          image: 'https://domdombufe.hu/pictures/combtal.jpg'
        },
        {
          name: 'Holstein tál',
          description: '2 szelet ronston sült tarja, 2db tükörtojás, fűszerpaprika, választható köret (hasáb/rizs)',
          image: 'https://domdombufe.hu/pictures/holsteinszelet.jpg'
        },
        {
          name: 'Rostonsült csirkemell tál',
          description: '2 szelet csirkemell, paradicsom, lilahagyma, jégsaláta, uborka, tzatziki, választható köret (hasáb/rizs)',
          image: 'https://domdombufe.hu/pictures/rostoncsirketal.jpg'
        },
        {
          name: 'Panírozott csirkemell tál',
          description: '2 szelet rántott csirkemell, lilahagyma, paradicsom, jégsaláta, uborka, tzatziki, választható köret (hasáb/rizs)',
          image: 'https://domdombufe.hu/pictures/panirozottcsirkemelltal.jpg'
        },
        {
          name: 'Rántott sajtos tál',
          description: '3 szelet rántott sajt, lilahagyma, paradicsom, jégsaláta, uborka, tzatziki, választható köret (hasáb/rizs)',
          image: 'https://domdombufe.hu/pictures/rantottsajt.jpg'
        },
        {
          name: 'Falafel tál',
          description: '11db falafelgolyó, lilahagyma, paradicsom, jégsaláta, uborka, tzatziki, csípős öntet, választható köret (hasáb/rizs)',
          image: 'https://domdombufe.hu/pictures/falafeltal.jpg'
        },
      ]
    },
    {
      id: 3,
      name: 'Hamburgerek',
      description: 'Hamburgerek kategória',
      foods: [
        {
          name: 'Szakállas hamburger',
          description: 'buci zsömle, saját készítésű 250g marhahúspogácsa, 2 szelet cheddar sajt, vöröshagyma, paradicsom, majonéz, jégsaláta',
          image: 'https://domdombufe.hu/pictures/szakallashamburger.jpg'
        },
        {
          name: 'Marhahúsos hamburger',
          description: 'buci zsömle, saját készítésű marhahúspogácsa, sajt, csalamádé, lilahagyma, paradicsom, jégsaláta, uborka, ketchup, mustár, majonéz, pirított hagyma',
          image: 'https://domdombufe.hu/pictures/marhahamburger.jpg'
        },
        {
          name: 'Rostonsült csirkemelles hamburger',
          description: 'buci, rostonsült csirkemell, sajt, lilahagyma, paradicsom, jégsaláta, uborka, ketchup, mustár, majonéz, pirított hagyma',
          image: 'https://domdombufe.hu/pictures/rostonhamburger.jpg'
        },
        {
          name: 'Panírozott csirkemelles hamburger',
          description: 'buci, panírozott csirkemell, sajt, lilahagyma, paradicsom, jégsaláta, uborka, ketchup, mustár, majonéz, pirított hagyma',
          image: 'https://domdombufe.hu/pictures/panirozotthambi.jpg'
        },
        {
          name: 'Rántott karajos hamburger',
          description: 'buci, panírozott karaj, sajt, lilahagyma, paradicsom, jégsaláta, uborka, ketchup, mustár, majonéz, pirított hagyma',
          image: 'https://domdombufe.hu/pictures/rantottkarajhambi.jpg'
        },
        {
          name: 'Sajtos amerikai hamburger',
          description: 'kis buci, fél húspogácsa, sajt, csalamádé, lilahagyma, paradicsom, jégsaláta, uborka, ketchup, mustár, majonéz, pirított hagyma',
          image: 'https://domdombufe.hu/pictures/amerikaihamburger.jpg'
        },
        {
          name: 'Gyrosos hamburger',
          description: 'buci, gyroshús, marhahúspogácsa, sajt, csalamádé, lilahagyma, paradicsom, jégsaláta, uborka, ketchup, mustár, majonéz, tzatziki, csípős öntet, pirított hagyma',
          image: 'https://domdombufe.hu/pictures/gyrososhamburger.jpg'
        },
        {
          name: 'Rántott sajtos hamburger',
          description: 'buci, rántott sajt, lilahagyma, paradicsom, jégsaláta, uborka, ketchup, mustár, majonéz, pirított hagyma',
          image: 'https://domdombufe.hu/pictures/hamburgerek/rantott_sajtos_hamburger.jpg'
        },
        {
          name: 'Tarjás hamburger',
          description: 'buci, tarja, sajt, csalamádé, mustár,BBQ, pirított hagyma',
          image: 'https://domdombufe.hu/pictures/tarjashamburger.jpg'
        },
        {
          name: 'BBQ hamburger',
          description: 'buci, marhahús pogácsa, füstölt sajt, bacon, csalamádé, jégsaláta, uborka, paradicsom, l.hagyma, BBQ, mustár, pirított hagyma',
          image: 'https://domdombufe.hu/pictures/bbqhamburger.jpg'
        },
      ]
    },
    {
      id: 4,
      name: 'Gyros/pita',
      description: 'Gyros/pita kategória',
      foods: [
        {
          name: 'Gyros pitában',
          description: 'pita, gyroshús, lilahagyma, jégsaláta, uborka, paradicsom, tzatziki öntet, csípős öntet',
          image: 'https://domdombufe.hu/pictures/gyrospita.jpg'
        },
        {
          name: 'Kis adag Gyros pitában',
          description: 'pita, gyroshús, lilahagyma, jégsaláta, uborka, paradicsom, tzatziki öntet, csípős öntet',
          image: 'https://domdombufe.hu/pictures/gyrospita.jpg'
        },
        {
          name: 'Sajtos Gyros pitában',
          description: 'pita, gyroshús, reszelt trappista sajt, lilahagyma, jégsaláta, uborka, paradicsom, tzatziki öntet, csípős öntet',
          image: 'https://domdombufe.hu/pictures/sajtosgyrospita.jpg'
        },
        {
          name: 'Kis adag Sajtos Gyros pitában',
          description: 'pita, gyroshús, reszelt trappista sajt, lilahagyma, jégsaláta, uborka, paradicsom, tzatziki öntet, csípős öntet',
          image: 'https://domdombufe.hu/pictures/sajtosgyrospita.jpg'
        },
        {
          name: 'Falafel pitában',
          description: 'pita, falafel golyó, lilahagyma, jégsaláta, uborka, paradicsom, tzatziki öntet, csípős öntet',
          image: 'https://domdombufe.hu/pictures/falafelpita.jpg'
        },
        {
          name: 'Kis adag Falafel pitában',
          description: 'pita, falafel golyó, lilahagyma, jégsaláta, uborka, paradicsom, tzatziki öntet, csípős öntet',
          image: 'https://domdombufe.hu/pictures/falafelpita.jpg'
        },
        {
          name: 'Gyros tál',
          description: 'választható köret (hasáb/rizs), gyroshús, lilahagyma, jégsaláta, uborka, paradicsom, tzatziki öntet, csípős öntet',
          image: 'https://domdombufe.hu/pictures/gyrostal.jpg'
        },
        {
          name: 'Kis adag Gyros tál',
          description: 'választható köret (hasáb/rizs), gyroshús, lilahagyma, jégsaláta, uborka, paradicsom, tzatziki öntet, csípős öntet',
          image: 'https://domdombufe.hu/pictures/gyrostal.jpg'
        },
        {
          name: 'Sajtos gyros tál',
          description: 'választható köret (hasáb/rizs), gyroshús, reszelt trappista sajt, lilahagyma, jégsaláta, uborka, paradicsom, tzatziki öntet, csípős öntet',
          image: 'https://domdombufe.hu/pictures/sajtosgyrostal.jpg'
        },
        {
          name: 'Kis adag Sajtos gyros tál',
          description: 'választható köret (hasáb/rizs), gyroshús, reszelt trappista sajt, lilahagyma, jégsaláta, uborka, paradicsom, tzatziki öntet, csípős öntet',
          image: 'https://domdombufe.hu/pictures/sajtosgyrostal.jpg'
        },
      ]
    },
    {
      id: 5,
      name: 'Tortilla/Hot-Dog/Desszert',
      description: 'Tortilla/Hot-Dog/Desszert kategória',
      foods: [
        {
          name: 'Gyrosos tortilla',
          description: 'tortilla lap, gyroshús, lilahagyma, jégsaláta, uborka, paradicsom, tzatziki öntet, csípős öntet',
          image: 'https://domdombufe.hu/pictures/csirkestortilla.jpg'
        },
        {
          name: 'Kis adag Gyrosos tortilla',
          description: 'tortilla lap, gyroshús, lilahagyma, jégsaláta, uborka, paradicsom, tzatziki öntet, csípős öntet',
          image: 'https://domdombufe.hu/pictures/csirkestortilla.jpg'
        },
        {
          name: 'Csirkés tortilla',
          description: 'tortilla lap , rostonsült csirkemell csíkozva, ezersziget öntet, jégsaláta, uborka, paradicsom, lilahagyma',
          image: 'https://domdombufe.hu/pictures/csirkestortilla.jpg'
        },
        {
          name: 'Kis adag Csirkés tortilla',
          description: 'tortilla lap , rostonsült csirkemell csíkozva, ezersziget öntet, jégsaláta, uborka, paradicsom, lilahagyma',
          image: 'https://domdombufe.hu/pictures/csirkestortilla.jpg'
        },
        {
          name: 'Natúr Hot-Dog',
          description: 'hot-dog kifli, virsli, ketchup, mustár, majonéz',
          image: 'https://domdombufe.hu/pictures/gyros_hotdog_tortilla/naturhotdog.jpg'
        },
        {
          name: 'Amerikai Hot-Dog',
          description: 'hot-dog kifli, virsli, lilahagyma, paradicsom, jégsaláta, uborka, ketchup, mustár, majonéz, pirított hagyma',
          image: 'https://domdombufe.hu/pictures/hotdog.jpg'
        },
        {
          name: 'Sajtos baconos Hot-Dog',
          description: 'hot-dog kifli, baconbe tekert virsli, sajt, lilahagyma, paradicsom, uborka, jégsaláta, ketchup, mustár, majonéz, pirított hagyma',
          image: 'https://domdombufe.hu/pictures/hotdog.jpg'
        },
        {
          name: 'Palacsinta baracklekváros',
          description: 'Palacsinta baracklekváros töltelékkel',
          image: 'https://domdombufe.hu/pictures/palacsinta.jpg'
        },
        {
          name: 'Palacsinta áfonyalekváros',
          description: 'Palacsinta áfonyalekváros töltelékkel',
          image: 'https://domdombufe.hu/pictures/palacsinta.jpg'
        },
        {
          name: 'Palacsinta kakaós',
          description: 'Palacsinta kakaós töltelékkel',
          image: 'https://domdombufe.hu/pictures/palacsinta.jpg'
        },
      ]
    },

  ];

  allFoods: FoodItem[] = this.foodCategories.reduce((acc, category) => [...acc, ...category.foods], []);

  filteredFoods: FoodItem[] = this.allFoods;

  searchText: string = '';
  constructor(private favoritesService: FavoritesService) {}

  searchFoods(searchText: string): string {
    if (searchText.trim() === '') {
      this.filteredFoods = this.allFoods;
    } else {
      const lowercaseSearchText = searchText.toLowerCase();
      this.filteredFoods = this.allFoods.filter(
        (food) =>
          food.name.toLowerCase().includes(lowercaseSearchText) ||
          this.foodCategories.some((category) => category.name.toLowerCase().includes(lowercaseSearchText))
      );

    }
  
    getCategoryName(food: FoodItem): string {
      const category = this.foodCategories.find((c) => c.foods.includes(food));
      return category ? category.name : '';}
}

  constructor(private router: Router) {}

  goToFoodDetails(foodId: number) {
    this.router.navigate(['/food', foodId]);

    
  }
  isFavorite(foodId: number): boolean {
    return this.favoritesService.getFavorites().some((favorite) => favorite.id === foodId);
  }

  toggleFavorite(foodId: number, foodName: string) {
    if (this.isFavorite(foodId)) {
      this.favoritesService.removeFromFavorites(foodId);
    } else {
      this.favoritesService.addToFavorites(foodId, foodName);
    }
  }

  removeFavorite(foodId: number) {
    this.favoritesService.removeFromFavorites(foodId);
  }
}
