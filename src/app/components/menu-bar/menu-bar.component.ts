import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  @Input()
  logoCover: string = "assets/icon-page.png"
  constructor() { }

  ngOnInit(): void {
  }

}
