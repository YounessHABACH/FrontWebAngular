import { Component, OnInit } from '@angular/core';
import { Dish } from "../models/dish";
import { DishService } from "../services/dish.service";
import { Promotion } from "../models/promotion";
import { PromotionService } from "../services/promotion.service";
import {Leader} from "../models/leader";
import {LeaderService} from "../services/leader.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dish: Dish | undefined
  promotion: Promotion | undefined
  leader: Leader | undefined

  constructor(private dishService: DishService,
              private promotionService: PromotionService,
              private leaderService: LeaderService) { }

  ngOnInit(): void {
    this.getDishes();
    this.getPromotions();
    this.getLeaders();
  }

  getDishes(): void {
    this.dishService.getFeaturedDish()
      .subscribe((dish) => {
        this.dish = dish;
      });
  }

  getPromotions(): void {
    this.promotionService.getFeaturedPromotion()
      .subscribe((promotion) => {
        this.promotion = promotion;
      });
  }

  getLeaders(): void {
    this.leaderService.getFeaturedLeader()
      .subscribe((leader) => {
        this.leader = leader;
      });
  }

}
