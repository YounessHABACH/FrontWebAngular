import { Component, OnInit } from '@angular/core';
import {Leader} from "../models/leader";
import {LeaderService} from "../services/leader.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  leaders: Leader[] | undefined

  constructor(private leaderService: LeaderService) {}

  ngOnInit(): void {
    this.leaders = this.leaderService.getLeaders();
  }

}