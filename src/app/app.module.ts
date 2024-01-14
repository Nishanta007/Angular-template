import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BlueBtnComponent } from './blue-btn/blue-btn.component';
import { HeroComponent } from './hero/hero.component';
import { MarketingComponent } from './marketing/marketing.component';
import { VideoFrameComponent } from './video-frame/video-frame.component';
import { LogosComponent } from './logos/logos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BlueBtnComponent,
    HeroComponent,
    MarketingComponent,
    VideoFrameComponent,
    LogosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
