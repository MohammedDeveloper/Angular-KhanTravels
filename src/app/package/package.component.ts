import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'travel-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {

  packages: any[];

  constructor() { 

    /// set the paackages
    this.packages = [
        { name: "Pre K.G to U.K.G", description: "Applies to the students studying from Pre-KinderGarden to Upper-KinderGarden", cost: "700.00/month" },
        { name: "1st Std to 5th Std", description: "Applies to the students studying from 1st standard to 5th standard", cost: "1000.00/month" },
        { name: "6th Std to 8th Std", description: "Applies to the students studying from 6th standard to 8th standard", cost: "1250.00/month" },
        { name: "9th Std to 10th Std", description: "Applies to the students studying from 9th standard to 10th standard", cost: "1600.00/month" },
        { name: "11th Std to 12th Std", description: "Applies to the students studying from Pre-KinderGarden to Upper-KinderGarden", cost: "2000.00/month" },
        { name: "Half-yearly Package", info: "*Discounts Apply. Please contact us", description: "Can be booked for the 6 months in single payment.", cost: null },
        { name: "Yearly Package", info: "*Discounts Apply. Please contact us", description: "Can be booked for the entire year in single payment.", cost: null }   
    ];
  }

  ngOnInit() {
  }

}
