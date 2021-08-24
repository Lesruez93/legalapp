import { CountryPhone } from './../forms/validations/country-phone.model';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { counterRangeValidator } from '../components/counter-input/counter-input.component';
import { PhoneValidator } from '../validators/phone.validator';
import { UsernameValidator } from '../validators/username.validator';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: [
    './styles/forgot-password.page.scss'
  ]
})

export class ForgotPasswordPage implements OnInit {
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

  constructor(
    public router: Router,
    public menu: MenuController
  ) {
    this.forgotPasswordForm = new FormGroup({
      'email': new FormControl('test@test.com', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]))
    });
  }
  ngOnInit(): void {

    this.menu.enable(false);
    //  We just use a few random countries, however, you can use the countries you need by just adding them to this list.
    // also you can use a library to get all the countries from the world.
    this.countries = [
      new CountryPhone('+27', 'South Africa'),
      new CountryPhone('+1', 'United States'),
      new CountryPhone('+263', 'Zimbabwe'),
      new CountryPhone('BR', 'Brasil'),
    new CountryPhone('FR', 'France')
    ];

    const country = new FormControl(this.countries[0], Validators.required);

    const phone = new FormControl('', Validators.compose([
      Validators.required,
      PhoneValidator.invalidCountryPhone(country)
    ]));
    this.country_phone_group = new FormGroup({
      country: country,
      phone: phone
    });

    this.validationsForm = new FormGroup({
    
      'country_phone': this.country_phone_group,

    });
  }

  recoverPassword(): void {
    console.log(this.forgotPasswordForm.value);
    this.router.navigate(['reset-password']);
  }

}
