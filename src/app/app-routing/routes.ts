import {Routes} from "@angular/router";
// components
import { DishdetailComponent } from '../dishdetail/dishdetail.component';
import { MenuComponent } from '../menu/menu.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';


export const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "menu", component: MenuComponent},
  {path: "dishdetail/:id", component: DishdetailComponent},
  {path: "contactus", component: ContactComponent},
  {path: "about", component: AboutComponent},
  {path: "", component: HomeComponent},
  // {path: "**", pathMatch: 'full', component: PageNotFoundComponent},
]
