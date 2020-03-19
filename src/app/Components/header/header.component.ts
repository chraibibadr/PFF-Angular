import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isOn : boolean = false
  constructor() { }

  ngOnInit() {
  }

  toggleNavbar()
  {
    this.isOn = !this.isOn
  }
}
