import { AfterContentChecked, AfterViewChecked, Component, Input, OnInit } from '@angular/core';
import { TeamService } from './app-ourteam.service';
import { ITeam } from './app-team-interface'
import { ItemService } from './app-item.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent implements OnInit,AfterContentChecked {
  constructor(private teamService: TeamService, private router: Router, private itemService: ItemService) { }
  @Input() searchPar!: string
  href!: string
  ourTeam: ITeam[] = []
  items: any = []
  filteredItems: any = []



  filterItems() {
    
    if (this.searchPar == undefined) {
      this.filteredItems = this.items
     
    }
    else {
     let filter =this.items.filter((item:any)=>{
        return item.name.includes(this.searchPar)
      })
     this.filteredItems=filter
    
    }
  }








  getTeam() {
    this.teamService.getItemsData().subscribe(data => {
      this.ourTeam = data
      // console.log(this.ourTeam)
    })
  }

  getItem() {
    this.itemService.getItemsData().subscribe(data => {
      this.items = data
      //console.log(this.items)
    })
  }

  ngOnInit(): void {
    this.href = this.router.url
    if (this.href === '/search') {
      this.getItem()
    
    } else if (this.href === '/home') {
      this.getTeam()
    }
  }
 
  ngAfterContentChecked(){
    this.filterItems()
  }

}
