import { Component, OnInit } from '@angular/core';
import {IDecore}from './app-decore-interface'
import { DecoreService } from './app-decore.service'
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
 decores!:IDecore[]
  constructor(private decoreService: DecoreService) { }
  getDecoresFromService() {
    this.decoreService.getDecoreData().subscribe((data)=>{
      this.decores=data
    })
  }
  ngOnInit(): void {
    this.getDecoresFromService()
  }

}
