import { Component, OnInit } from '@angular/core';

import { musics } from '../musics'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html']
})
export class ProductListComponent implements OnInit {

  musics = musics;

  constructor() { }

  ngOnInit() {
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  share() {
    window.alert('The product has been shared!');
  }
}
