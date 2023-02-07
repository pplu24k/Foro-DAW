import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-nav',
  templateUrl: './section-nav.component.html',
  styleUrls: ['./section-nav.component.css']
})
export class SectionNavComponent implements OnInit{

  @Input() tipo!:string;
  @Input() elementos: any;

  ngOnInit(){
    console.log(this.elementos)
  }
}
