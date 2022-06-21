import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-success]',
  template: `<div class="app-warning"></div>`,
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
