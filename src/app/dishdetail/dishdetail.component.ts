import {Component, Input, OnInit} from '@angular/core';
import {Dish} from "../models/dish";
import {ActivatedRoute, Params} from "@angular/router";
import {Location} from "@angular/common";
import {DishService} from "../services/dish.service";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.css']
})

export class DishdetailComponent implements OnInit {

  // @Input()
  dish!: Dish;
  dishIds!: string[];
  prev!: string;
  next!: string;

  constructor(private route: ActivatedRoute,
              private dishService: DishService,
              private location: Location) {}

  ngOnInit(): void {
    this.getAllDishIds();
    this.getDishByParam();
  }

  goBack(): void {
    this.location.back();
  }

  getAllDishIds(): void {
    this.dishService.getDishIds().subscribe(dishIds => {
      this.dishIds = dishIds;
    })
  }

  getDishByParam(): void {
    this.route.params
      .pipe(
        switchMap((params: Params) => this.dishService.getDish(params['id']))
      ).subscribe(dish => {
        this.dish = dish; this.setPreviousNext(dish.id!);
      });
  }

  setPreviousNext(dishId: string){
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }
}
