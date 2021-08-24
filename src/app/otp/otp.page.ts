import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { CountryPhone } from '../forms/validations/country-phone.model';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {
  validationsForm: FormGroup;
  forgotPasswordForm: FormGroup;
  country_phone_group: FormGroup;
  countries: Array<CountryPhone>;

  validations = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
     'phone': [
      { type: 'required', message: 'Phone is required.' },
      { type: 'invalidCountryPhone', message: 'Phone is incorrect for the selected country.' }
    ],
  };

  constructor(public router: Router,
    public menu: MenuController) {
      this.forgotPasswordForm = new FormGroup({
        'email': new FormControl('test@test.com', Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ]))
      });
     }

     moveFocus(event, nextElement, previousElement) {
      console.log(event.keyCode);
      if (event.keyCode === 8 && previousElement) {
        previousElement.setFocus();
      } else if (event.keyCode >= 48 && event.keyCode <= 57) {
        if (nextElement) {
          nextElement.setFocus();
        }
      } else if (event.keyCode >= 96 && event.keyCode <= 105) {
        if (nextElement) {
          nextElement.setFocus();
        }
      } else {
        event.path[0].value = '';
      }
    }
  ngOnInit() {
  }

  recoverPassword(){
    
  }

}
