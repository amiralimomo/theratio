import { Component, OnInit } from '@angular/core';
import {PageHeaderService}from './app-paheheader.service'
import {IPageHeader}from './app-paheheader-interface'
@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
pageData!:IPageHeader
imgUrl:string="url('/assets/images/pheader-team.jpg')"
titlepage:string="Our Team"
  constructor(private pageHeaderService:PageHeaderService) { }
  // getPageHeaderData(){
  //   this.pageHeaderService.getPageHeaderData().subscribe(data=>{
  //     this.pageData=data
    
  //   })
  // }
  ngOnInit()  {
    //this.getPageHeaderData()
  
  }

}
