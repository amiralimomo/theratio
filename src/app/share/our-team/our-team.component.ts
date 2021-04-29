import { Component, OnInit } from '@angular/core';
import { TeamService } from './app-ourteam.service';
import {ITeam}from './app-team-interface'
@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent implements OnInit {
 public ourTeam:ITeam[]=[]

  constructor(private teamService: TeamService) { }
  getTeam() {
    this.teamService.getItemsData().subscribe(data => {
      this.ourTeam=data
      // console.log(this.ourTeam)
    })
  }
  ngOnInit(): void {
    this.getTeam()
  }

}
