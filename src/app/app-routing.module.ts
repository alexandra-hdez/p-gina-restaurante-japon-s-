import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path: 'navbar',component: NavbarComponent},
  {path: 'carousel',component: CarouselComponent},
  {path: 'cards',component: CardsComponent},
  {path: 'cards',component: CardsComponent},
  {path: 'cards',component: CardsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
