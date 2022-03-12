import {Component, Input, OnInit} from '@angular/core';
import {Dish} from "../models/dish";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {DishService} from "../services/dish.service";

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.css']
})

export class DishdetailComponent implements OnInit {

  // @Input()
  dish: Dish | undefined;

  constructor(private route: ActivatedRoute,
              private dishService: DishService,
              private location: Location) { }

  ngOnInit(): void {
    let dishId = this.route.snapshot.params['id'];
    this.dishService.getDish(dishId)
      .subscribe((dish) => {
        this.dish = dish
      });
  }

  goBack(): void {
    this.location.back();
  }

}
