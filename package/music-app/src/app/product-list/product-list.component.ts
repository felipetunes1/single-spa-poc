import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";

import { musics } from '../musics'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {

  musics = musics;

  constructor(config: NgbCarouselConfig) {
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
   }

  ngOnInit() {
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  share() {
    window.alert('The product has been shared!');
  }
}
