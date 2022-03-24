// import { DISHES } from "../shared/dishes";
import { Dish } from "../models/dish";
import { Observable} from "rxjs";
// import { delay } from "rxjs/operators";
import { map, catchError } from "rxjs/operators";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable} from "@angular/core";
import { baseUrl } from "../shared/apiurl";
import { ProcessHTTPMsgService } from "./process-httpmsg.service";

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http: HttpClient,
              private processHTTPMsgService: ProcessHTTPMsgService) { }

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
    // return of(DISHES).pipe(delay(0));

    // using http client
    return this.http
      .get<Dish[]>(baseUrl + "dishes")
      .pipe(catchError(this.processHTTPMsgService.handleError))
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

    // return of(DISHES.filter((dish) => dish.id === id)[0]).pipe(delay(0));


    // using http client
    return this.http
      .get<Dish>(baseUrl + "dishes/" + id)
      .pipe(catchError(this.processHTTPMsgService.handleError))

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
    // return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(0));

    // using http client
    return this.http
      .get<Dish[]>(baseUrl + "dishes/?featured=true").pipe(map(dishes=> dishes[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError))
  }

  getDishIds(): Observable<string[] | any> {
    return this.getDishes()
      .pipe(map(dishes => dishes.map(dish => dish.id)))
      .pipe(catchError(err => err));
  }

  putDish(dish: Dish): Observable<Dish> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http
      .put<Dish>(baseUrl + 'dishes/' + dish.id, dish, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError))
  }
}

