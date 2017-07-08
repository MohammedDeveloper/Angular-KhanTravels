import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

declare var jQuery: any;

@Component({
  selector: 'travel-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

 albums: any[];

  constructor() {

      /// get the list of albums
      this.albums = [
         { caption : "Kishkinta - 2016", defaultPic: "/assets/images/001.jpg", Date: "05/21/2016" },
         { caption : "Family", defaultPic: "/assets/images/003.jpg", Date: "05/21/2015" },
         { caption : "QueensLand - 2015", defaultPic: "/assets/images/005.jpg", Date: "05/21/2017" },
         { caption : "Others", defaultPic: "/assets/images/004.jpg", Date: "02/21/2017" }
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
