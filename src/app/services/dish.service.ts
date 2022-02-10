import { Injectable } from '@angular/core';
import { DISHES } from "../shared/dishes";
import { Dish } from "../models/dish";

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes() {
    return DISHES
  }

  getDish(id: string): Dish {
    return DISHES.filter((dish) => { dish.id === id })[0]
  }

  getFeaturedDish(): Dish {
    return DISHES.filter((dish) => dish.featured)[0]
  }
}
