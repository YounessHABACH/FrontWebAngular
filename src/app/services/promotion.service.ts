import { Promotion } from "../models/promotion";
import { PROMOTIONS } from "../shared/promotions";
import {Observable, of} from "rxjs"
import { delay } from "rxjs/operators"
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): Observable<Promotion[]> {
    // return Promise.resolve(PROMOTIONS);

    // return new Promise<Promotion[]>(resolve => {
    //   setTimeout(() => {
    //     resolve(PROMOTIONS);
    //   }, 4000);
    // })

    // @ts-ignore
    return of(PROMOTIONS).pipe(delay(0))
  }

  getPromotion(id: string): Observable<Promotion> {
    // return Promise.resolve(PROMOTIONS.filter((promotion) => promotion.id === id)[0]);

    // return new Promise<Promotion>(resolve => {
    //   setTimeout(() => {
    //     resolve(PROMOTIONS.filter((promotion) => promotion.id === id)[0]);
    //   }, 4000);
    // })

    // @ts-ignore
    return of(PROMOTIONS.filter((promotion) => promotion.id === id)[0]).pipe(delay(0))
  }

  getFeaturedPromotion(): Observable<Promotion> {
    // return Promise.resolve(PROMOTIONS.filter((promotion) => promotion.featured)[0]);

    // return new Promise<Promotion>(resolve => {
    //   setTimeout(() => {
    //     resolve(PROMOTIONS.filter((promotion) => promotion.featured)[0]);
    //   }, 4000);
    // })

    // @ts-ignore
    return of(PROMOTIONS.filter((promotion) => promotion.featured)[0]).pipe(delay(0))
  }
}
