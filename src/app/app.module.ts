import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { HomeeComponent } from './homee/homee.component'

const appRouts :Routes =[
{path:'',redirectTo:'blank_route', pathMatch:'full'},
{path:'blank_route', component:HomeeComponent},
{path:'about', component:AboutComponent},
{path:'portfolio', component:PortfolioComponent},
{path:'footer', component:FooterComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    AboutComponent,
    PortfolioComponent,
    FooterComponent,
    HomeeComponent,
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRouts), CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
