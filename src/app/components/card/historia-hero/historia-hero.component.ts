import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-historia-hero',
  templateUrl: './historia-hero.component.html',
  styleUrls: ['./historia-hero.component.css']
})
export class HistoriaHeroComponent implements OnInit {
  @Input()
  historiaHero:string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
