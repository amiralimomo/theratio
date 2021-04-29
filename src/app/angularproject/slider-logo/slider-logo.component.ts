import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-logo',
  templateUrl: './slider-logo.component.html',
  styleUrls: ['./slider-logo.component.scss']
})
export class SliderLogoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sliders=[
    {title:'1',img:"/assets/images/client1.svg"},
    {title:'2',img:"/assets/images/client2.svg"},
    {title:'3',img:"/assets/images/client3.svg"}, 
    {title:'4',img:"/assets/images/client4.svg"}, 
    {title:'5',img:"/assets/images/client5.svg"}
  ]
  onSwiper(swiper:any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
}
