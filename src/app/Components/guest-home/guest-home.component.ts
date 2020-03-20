import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guest-home',
  templateUrl: './guest-home.component.html',
  styleUrls: ['./guest-home.component.css']
})
export class GuestHomeComponent implements OnInit {

  isOn:boolean
  constructor() { }

  ngOnInit() {
  }

  focusRadio()
  {
    this.isOn = !this.isOn
  }
}
