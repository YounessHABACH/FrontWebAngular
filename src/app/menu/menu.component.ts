import {Component, Inject, OnInit} from '@angular/core';
import { Dish } from '../models/dish'
import {DishService} from "../services/dish.service";
import {expand, flyInOut} from "../animations/app.animations";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})

export class MenuComponent implements OnInit {

  dishes!: Dish[];
  errMsg!: string;

  constructor(private dishService: DishService,
              //@ts-ignore
              @Inject("BaseUrl") public baseUrl) { }

  ngOnInit(): void {
    this.dishService.getDishes()
      .subscribe(
        (dishes) => {
        this.dishes = dishes;
        }, error => {
          this.errMsg = <any>error;
        }
      )
  }

}
