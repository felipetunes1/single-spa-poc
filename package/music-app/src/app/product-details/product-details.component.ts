import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { musics } from "../musics";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent implements OnInit {
  music;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.music = musics[+params.get('musicId')]
    })
  }

  click() {
    alert("Like Like Like Like Like")
  }

}
