import { Component, OnInit } from '@angular/core';
import {Leader} from "../models/leader";
import {LeaderService} from "../services/leader.service";
import {expand, flyInOut} from "../animations/app.animations";
import {baseUrl} from "../shared/apiurl";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class AboutComponent implements OnInit {

  leaders: Leader[] | undefined
  baseUrl: string = baseUrl;

  constructor(private leaderService: LeaderService) {}

  ngOnInit(): void {
    this.leaderService.getLeaders()
      .subscribe((leaders) => {
        this.leaders = leaders
      })
  }

}
