import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './angularproject/login/login.component';
import { HeaderComponent } from './share/header/header.component';
import { FooterComponent } from './share/footer/footer.component';
import {UserService}from'./app-user.service';
import { PageHeaderComponent } from './share/page-header/page-header.component';
import {HttpClientModule}from '@angular/common/http'
import { TeamskillComponent } from './angularproject/teamskill/teamskill.component';
import { SliderLogoComponent } from './angularproject/slider-logo/slider-logo.component';
import { OurTeamComponent } from './share/our-team/our-team.component';
import { TestimonialsComponent } from './angularproject/testimonials/testimonials.component';
import { SwiperModule } from 'swiper/angular';
import {ImonialsService} from './angularproject/testimonials/app-imonials.service'
import {TeamService}from './share/our-team/app-ourteam.service'
import {ItemService}from './share/our-team/app-item.service'
import {TeamSkillService} from './angularproject/teamskill/app-teamskill.service';
import { SearchComponent } from './angularproject/search/search.component';
import { HomeComponent } from './angularproject/home/home.component'
import {Routes,RouterModule}from '@angular/router'
import {PageHeaderService}from './share/page-header/app-paheheader.service';
import { PortfolioComponent } from './angularproject/portfolio/portfolio.component'
import {DecoreService}from './angularproject/portfolio/app-decore.service'
const routes:Routes=[
  {path:'home',component:HomeComponent},
  {path:'',component:LoginComponent},
  {path:'search',component:SearchComponent},
  {path:'portfolio',component:PortfolioComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    PageHeaderComponent,
   
    TeamskillComponent,
        SliderLogoComponent,
        OurTeamComponent,
        TestimonialsComponent,
        SearchComponent,
        HomeComponent,
        PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SwiperModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService,ImonialsService,TeamService,TeamSkillService,ItemService,PageHeaderService,DecoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
