import { DISHES } from "../shared/dishes";
import { Dish } from "../models/dish";
import {Observable, of} from "rxjs";
import { delay } from "rxjs/operators";

// @Injectable({
//   providedIn: 'root'
// })
export class DishService {

  constructor() { }

  // getDishes(): Promise<Dish[]> {
  getDishes(): Observable<Dish[]> {
    // normal
    // return DISHES

    // resolve promise
    // return Promise.resolve(DISHES);

    // promise
    // return new Promise(resolve => {
    //   // simulate server latency with 3s delay
    //   setTimeout(() => {
    //     resolve(DISHES)
    //   }, 3000);
    // });

    //observable version 1
    // @ts-ignore
    // return of(DISHES).pipe(delay(2000)).toPromise();

    //observable version 2
    return of(DISHES).pipe(delay(2000));
  }

  // getDish(id: string): Promise<Dish> {
  getDish(id: string): Observable<Dish> {
    // return Promise.resolve(
    //   DISHES.filter((dish) => dish.id === id)[0]
    // );
    // return new Promise(resolve => {
    //   // simulate server latency with 3s delay
    //   setTimeout(() => {
    //     resolve(DISHES.filter((dish) => dish.id === id)[0]);
    //   },
    //     3000
    //   );
    // });
    // @ts-ignore
    // return of(DISHES.filter((dish) => dish.id === id)[0]).pipe(delay(2000)).toPromise();

    return of(DISHES.filter((dish) => dish.id === id)[0]).pipe(delay(2000));
  }

  // getFeaturedDish(): Promise<Dish> {
  getFeaturedDish(): Observable<Dish> {
    // return Promise.resolve(
    //   DISHES.filter((dish) => dish.featured)[0]
    // );
    // return new Promise(resolve => {
    //   // simulate server latency with 3s delay
    //   setTimeout(() => {
    //     resolve(DISHES.filter((dish) => dish.featured)[0]);
    //   },
    //     3000
    //   );
    // });
    // @ts-ignore
    return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000));
  }
}
