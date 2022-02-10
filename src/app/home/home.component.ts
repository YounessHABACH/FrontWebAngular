import { Component, OnInit } from '@angular/core';
import { Dish } from "../models/dish";
import { DishService } from "../services/dish.service";
import { Promotion } from "../models/promotion";
import { PromotionService } from "../services/promotion.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dish: Dish | undefined
  promotion: Promotion | undefined

  constructor(private dishService: DishService, private promotionService: PromotionService) { }

  ngOnInit(): void {
    this.dish = this.dishService.getFeaturedDish();
    this.promotion = this.promotionService.getFeaturedPromotion();

  }

}
