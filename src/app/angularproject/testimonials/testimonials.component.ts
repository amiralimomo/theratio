import { Component, OnInit } from '@angular/core';
import SwiperCore from 'swiper/core';
import {ImonialsService} from './app-imonials.service'
import{IImonial} from './app-imonial-interface'
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
imonials:IImonial[]=[]
  constructor(private imonialsService:ImonialsService) { }
getImonials(){
  this.imonialsService.getImonialsData().subscribe(data=>{

    this.imonials=data
  })
}
  ngOnInit(): void {
    this.getImonials()
  }
  
  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
}
