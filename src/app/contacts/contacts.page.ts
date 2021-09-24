import { Component, OnInit } from '@angular/core';
import {CallNumber} from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  segmentModel = "legalcover";

  constructor(private call: CallNumber){}

  ngOnInit() {
  }

callNumber(number) {
    this.call.callNumber("18001010101", false)
        .then(res => console.log('Launched dialer!', res))
        .catch(err => console.log('Error launching dialer', err));

  }

  segmentChanged(event){
    console.log(this.segmentModel);
    
    console.log(event);
  }

}
