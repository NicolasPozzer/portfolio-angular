import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './modals/login/login.component';
import { RedesComponent } from './redes/redes.component';
import { CarouselComponent } from './carousel/carousel.component';
import { Carousel1Component } from './modals/carousel1/carousel1.component';
import { EditCarousel1Component } from './buttons/edit-carousel1/edit-carousel1.component';
import { EditNameCarouselComponent } from './buttons/edit-name-carousel/edit-name-carousel.component';
import { NameCarouselComponent } from './modals/name-carousel/name-carousel.component';
import { EditCarousel2Component } from './buttons/edit-carousel2/edit-carousel2.component';
import { Carousel2Component } from './modals/carousel2/carousel2.component';
import { EditCarousel3Component } from './buttons/edit-carousel3/edit-carousel3.component';
import { Carousel3Component } from './modals/carousel3/carousel3.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RedesComponent,
    CarouselComponent,
    Carousel1Component,
    EditCarousel1Component,
    EditNameCarouselComponent,
    NameCarouselComponent,
    EditCarousel2Component,
    Carousel2Component,
    EditCarousel3Component,
    Carousel3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
