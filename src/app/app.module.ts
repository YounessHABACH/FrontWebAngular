import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// laibrairies
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatListModule } from "@angular/material/list";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import 'hammerjs'
// components
import { AppComponent } from './app.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// services
import { DishService } from "./services/dish.service";
import { PromotionService } from "./services/promotion.service";
// router
import { AppRoutingModule } from "./app-routing/app-routing.module";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    DishdetailComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        FlexLayoutModule,
        MatListModule,
        MatGridListModule,
        MatCardModule,
        MatButtonModule,
        AppRoutingModule,
        MatIconModule
    ],
  //RouterModule.forRoot(routes),
  providers: [
    // make it visible in all app compos
    DishService,
    PromotionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
