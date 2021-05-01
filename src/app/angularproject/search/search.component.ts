import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm!: FormGroup
  searchPar!:string
  constructor(private fb: FormBuilder) { }


  initialaizeSearchForm(): void {
    this.searchForm = this.fb.group({
      'search': new FormControl('')
      
    })
  } 
  searchItem(){
    //send
    this.searchPar=this.searchForm.value.search
    //console.log(this.searchForm.value.search)
  }
  ngOnInit(): void {
   this.initialaizeSearchForm()
  }
}


