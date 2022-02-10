import { Component, OnInit } from '@angular/core';
import { Dish } from '../models/dish'
import {DishService} from "../services/dish.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  dishes: Dish[] | undefined;
  selectedDish: Dish | undefined;

  constructor(private dishService: DishService) { }

  ngOnInit(): void {
    this.dishes = this.dishService.getDishes()
  }

  onSelectDish(dish: Dish) {
    this.selectedDish = dish
  }
}
