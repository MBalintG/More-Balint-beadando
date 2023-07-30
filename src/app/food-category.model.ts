
export interface FoodCategory {
    id: number;
    name: string;
    description: string;
    foods: FoodItem[]; 
  }
  
  export interface FoodItem {
    name: string;
    description: string;
    image: string;
  }
  