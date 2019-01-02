import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { ComissionComponent } from './comission/comission.component';
import { CarouselComponent } from './comission/carousel/carousel.component';
import { ComissionOrderComponent } from './comission/comission-order/comission-order.component';
import { ParallaxComponent } from './comission/parallax/parallax.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavTopComponent } from './header/nav-top/nav-top.component';
import { rounting } from './app.routing';
import { LogoComponent } from './home/logo/logo.component';
import { SubLogosComponent } from './home/sub-logos/sub-logos.component';
import {SafePipe, VideoComponent} from './home/video/video.component';
import { HomeCarouselComponent } from './home/home-carousel/home-carousel.component';
import { VideosComponent } from './youtube/videos/videos.component';
import { YVideoComponent } from './youtube/videos/y-video/y-video.component';
import { ComissionService } from './comission/comission.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    YoutubeComponent,
    ComissionComponent,
    CarouselComponent,
    ComissionOrderComponent,
    ParallaxComponent,
    HeaderComponent,
    FooterComponent,
    NavTopComponent,
    LogoComponent,
    SubLogosComponent,
    VideoComponent,
    HomeCarouselComponent,
    SafePipe,
    VideosComponent,
    YVideoComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule,
    rounting,
    FormsModule
    ],
  providers: [
    ComissionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
