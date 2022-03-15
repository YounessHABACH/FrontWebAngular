import {Component, Inject, OnInit} from '@angular/core';
import { Dish } from '../models/dish'
import {DishService} from "../services/dish.service";
import {baseUrl} from "../shared/apiurl";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  dishes: Dish[] | undefined;

  constructor(private dishService: DishService,
              //@ts-ignore
              @Inject("BaseUrl") public baseUrl) { }

  ngOnInit(): void {
    this.dishService.getDishes()
      .subscribe((dishes) => {
        this.dishes = dishes;
      })
  }

}
