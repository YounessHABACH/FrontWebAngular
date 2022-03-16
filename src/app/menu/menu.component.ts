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
