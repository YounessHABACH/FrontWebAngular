import { DISHES } from "../shared/dishes";
import { Dish } from "../models/dish";

// @Injectable({
//   providedIn: 'root'
// })
export class DishService {

  constructor() { }

  getDishes(): Promise<Dish[]> {
    // return Promise.resolve(DISHES);
    return new Promise(resolve => {
      // simulate server latency with 3s delay
      setTimeout(() => {
        resolve(DISHES)
      }, 3000);
    });
  }

  getDish(id: string): Promise<Dish> {
    // return Promise.resolve(
    //   DISHES.filter((dish) => dish.id === id)[0]
    // );
    return new Promise(resolve => {
      // simulate server latency with 3s delay
      setTimeout(() => {
        resolve(DISHES.filter((dish) => dish.id === id)[0]);
      },
        3000
      );
    });
  }

  getFeaturedDish(): Promise<Dish> {
    // return Promise.resolve(
    //   DISHES.filter((dish) => dish.featured)[0]
    // );
    return new Promise(resolve => {
      // simulate server latency with 3s delay
      setTimeout(() => {
        resolve(DISHES.filter((dish) => dish.featured)[0]);
      },
        3000
      );
    });
  }
}
