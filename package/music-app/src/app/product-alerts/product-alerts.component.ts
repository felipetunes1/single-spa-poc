import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html']
})
export class ProductAlertsComponent implements OnInit {

  @Input() music;

  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
