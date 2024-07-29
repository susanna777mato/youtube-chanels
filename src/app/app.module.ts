import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDividerModule} from '@angular/material/divider'

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HoomPageComponent } from './components/hoom-page/hoom-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ChannelsComponent } from './components/channels/channels.component';
import { AdvantagesPageComponent } from './components/advantages-page/advantages-page.component';
import { ReviewsPageComponent } from './components/reviews-page/reviews-page.component';
import Swiper from 'swiper';
import { FormsModule } from '@angular/forms';
import { AtworkPageComponent } from './components/atwork-page/atwork-page.component';
import { ResourcesPageComponent } from './components/resources-page/resources-page.component';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HoomPageComponent,
    AboutPageComponent,
    ChannelsComponent,
    AdvantagesPageComponent,
    ReviewsPageComponent,
    AtworkPageComponent,
    ResourcesPageComponent
  ],
  imports: [
    BrowserModule, FormsModule, MatDividerModule

  ],
  providers: [Swiper],
  bootstrap: [AppComponent]
})
export class AppModule { }
