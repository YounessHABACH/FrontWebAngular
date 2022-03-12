import { Promotion } from "../models/promotion";
import { PROMOTIONS } from "../shared/promotions";

// @Injectable({
//   providedIn: 'root'
// })
export class PromotionService {

  constructor() { }

  getPromotions(): Promise<Promotion[]> {
    // return Promise.resolve(PROMOTIONS);
    return new Promise<Promotion[]>(resolve => {
      setTimeout(() => {
        resolve(PROMOTIONS);
      }, 4000);
    })
  }

  getPromotion(id: string): Promise<Promotion> {
    // return Promise.resolve(PROMOTIONS.filter((promotion) => promotion.id === id)[0]);
    return new Promise<Promotion>(resolve => {
      setTimeout(() => {
        resolve(PROMOTIONS.filter((promotion) => promotion.id === id)[0]);
      }, 4000);
    })
  }

  getFeaturedPromotion(): Promise<Promotion> {
    // return Promise.resolve(PROMOTIONS.filter((promotion) => promotion.featured)[0]);
    return new Promise<Promotion>(resolve => {
      setTimeout(() => {
        resolve(PROMOTIONS.filter((promotion) => promotion.featured)[0]);
      }, 4000);
    })
  }
}
