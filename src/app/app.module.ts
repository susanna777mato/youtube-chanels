import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HoomPageComponent } from './components/hoom-page/hoom-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ChannelsComponent } from './components/channels/channels.component';
import { AdvantagesPageComponent } from './components/advantages-page/advantages-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HoomPageComponent,
    AboutPageComponent,
    ChannelsComponent,
    AdvantagesPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
