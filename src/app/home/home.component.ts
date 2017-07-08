import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

declare var jQuery: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  topPictures: string[];

  constructor() {

      /// get the list of images
      this.topPictures = [
        "/static/img/002.jpg",
        "/static/img/001.jpg",
        "/static/img/003.jpg",
        "/static/img/004.jpg",
        "/static/img/005.jpg",
        "/static/img/006.jpg"
      ];
   }

  ngOnInit() {

     /// carousel...
      jQuery('.homeCarousel').slick({
          dots: true,
          fade: true,
          autoplay: true,
          autoplaySpeed: 2000
      });
  }

}
