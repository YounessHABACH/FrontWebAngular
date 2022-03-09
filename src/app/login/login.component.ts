import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {User} from "../models/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();

  constructor(private dialog: MatDialogRef<LoginComponent>) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("User: ", this.user)
    this.dialog.close()
  }
}
