import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from "@angular/router";
// laibrairies
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatListModule } from "@angular/material/list";
import {MatGridListModule} from "@angular/material/grid-list";
import 'hammerjs'
// components
import { AppComponent } from './app.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { MenuComponent } from './menu/menu.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {DishService} from "./services/dish.service";

const routes: Routes = [

]

@NgModule({
  declarations: [
    AppComponent,
    DishdetailComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule
  ],
  //RouterModule.forRoot(routes),
  providers: [
    // make it visible in all app compos
    DishService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
