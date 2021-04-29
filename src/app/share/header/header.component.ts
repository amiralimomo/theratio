import { Component, ContentChild, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private renderer: Renderer2) { }
  @ViewChild('bergerMenu') bergerMenu!: ElementRef
  
  
  ngOnInit(): void {
  }
  activeMenuBerger() {
    this.renderer.addClass(this.bergerMenu.nativeElement, 'active')
  }
  closeMenuBerger(){
    this.renderer.removeClass(this.bergerMenu.nativeElement, 'active')
  }
}
