import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts: any[];

  constructor() {

      /// get the list of albums
      this.contacts = [
         { firstname : "KARIM", lastname: "KHAN", email: "kareem.khan@gmail.com", phone: "+91 9444433457", bloodGroup: "'O' Positive", contactType: "Owner" },
         { firstname : "YAHIA", lastname: "KHAN", email: "yahia.khan@gmail.com", phone: "+91 9444134262", bloodGroup: "'O' Positive", contactType: "Owner" },
         { firstname : "MAJIDHA", lastname: "AZIM", email: "majidha.azim@gmail.com", phone: "+91 9962319948", bloodGroup: "'B' Positive", contactType: "Owner" },
      ];
   }

  ngOnInit() {
  }

}
