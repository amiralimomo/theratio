import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teamskill',
  templateUrl: './teamskill.component.html',
  styleUrls: ['./teamskill.component.scss']
})
export class TeamskillComponent implements OnInit, AfterViewInit {

  constructor() { }
  
  INTERIORSKETCH: number = 65
  MODELING: number = 95
  PLANNING: number = 55
  INTERIORDESIGN: number = 75
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {

  }

}
