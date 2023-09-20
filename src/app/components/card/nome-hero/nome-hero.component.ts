import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nome-hero',
  templateUrl: './nome-hero.component.html',
  styleUrls: ['./nome-hero.component.css']
})
export class NomeHeroComponent implements OnInit {
  @Input()
  nomeHero:string = ""
  constructor() { }

  ngOnInit(): void {
  }

}
