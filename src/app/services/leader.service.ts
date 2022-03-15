import { Injectable } from '@angular/core';
import {LEADERS} from "../shared/leaders";
import {Leader} from "../models/leader";
import {Observable, of} from "rxjs";
import { delay } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Observable<Leader[]> {
    // return Promise.resolve(LEADERS);

    // return new Promise<Leader[]>(resolve => {
    //   setTimeout(() => {
    //     resolve(LEADERS);
    //   }, 5000)
    // })

    // @ts-ignore
    return of(LEADERS).pipe(delay(0));
  }

  getLeader(id: string): Observable<Leader> {
    // return Promise.resolve(LEADERS.filter((leader) => leader.id === id)[0]);

    // return new Promise<Leader>(resolve => {
    //   setTimeout(() => {
    //     resolve(LEADERS.filter((leader) => leader.id === id)[0]);
    //   }, 5000)
    // })

    return of(LEADERS.filter((leader) => leader.id === id)[0]).pipe(delay(0));
  }

  getFeaturedLeader(): Observable<Leader> {
    // return Promise.resolve(LEADERS.filter((leader) => leader.featured)[0]);

    // return new Promise<Leader>(resolve => {
    //   setTimeout(() => {
    //     resolve(LEADERS.filter((leader) => leader.featured)[0]);
    //   }, 5000)
    // })

    // @ts-ignore
    return of(LEADERS.filter((leader) => leader.featured)[0]).pipe(delay(0));
  }
}
