import { Injectable } from '@angular/core';
import {LEADERS} from "../shared/leaders";
import {Leader} from "../models/leader";

// @Injectable({
//   providedIn: 'root'
// })
export class LeaderService {

  constructor() { }

  getLeaders(): Promise<Leader[]> {
    // return Promise.resolve(LEADERS);
    return new Promise<Leader[]>(resolve => {
      setTimeout(() => {
        resolve(LEADERS);
      }, 5000)
    })
  }

  getLeader(id: string): Promise<Leader> {
    // return Promise.resolve(LEADERS.filter((leader) => leader.id === id)[0]);
    return new Promise<Leader>(resolve => {
      setTimeout(() => {
        resolve(LEADERS.filter((leader) => leader.id === id)[0]);
      }, 5000)
    })
  }

  getFeaturedLeader(): Promise<Leader> {
    // return Promise.resolve(LEADERS.filter((leader) => leader.featured)[0]);
    return new Promise<Leader>(resolve => {
      setTimeout(() => {
        resolve(LEADERS.filter((leader) => leader.featured)[0]);
      }, 5000)
    })
  }
}
