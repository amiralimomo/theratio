import { AfterViewInit, Component, OnInit } from '@angular/core';
import {TeamSkillService}from './app-teamskill.service'
@Component({
  selector: 'app-teamskill',
  templateUrl: './teamskill.component.html',
  styleUrls: ['./teamskill.component.scss']
})
export class TeamskillComponent implements OnInit, AfterViewInit {

  constructor(private teamSkillService:TeamSkillService) { }
  
  INTERIORSKETCH!: number 
  MODELING!: number 
  PLANNING!: number 
  INTERIORDESIGN!: number 
  ngOnInit(): void {
    this.getSkillData()
  }
  ngAfterViewInit(): void {

  }
  getSkillData(){
    this.teamSkillService.getSkillData().subscribe(data=>{
    //  this.INTERIORSKETCH=data.
   this.INTERIORSKETCH=data.INTERIORSKETCH
   this.MODELING=data.MODELING
   this.PLANNING=data.PLANNING
   this.INTERIORDESIGN=data.INTERIORDESIGN
    })
  }

}
