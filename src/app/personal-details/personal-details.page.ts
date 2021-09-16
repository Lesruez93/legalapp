import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { counterRangeValidator } from '../components/counter-input/counter-input.component';
import { CountryPhone } from '../forms/validations/country-phone.model';
import { PasswordValidator } from '../validators/password.validator';
import { PhoneValidator } from '../validators/phone.validator';
import { UsernameValidator } from '../validators/username.validator';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.page.html',
  styleUrls: ['./personal-details.page.scss'],
})
export class PersonalDetailsPage implements OnInit {
  validationsForm: FormGroup;
  matching_passwords_group: FormGroup;
  country_phone_group: FormGroup;
  countries: Array<CountryPhone>;
  genders: Array<string>;


  constructor() { }

  ngOnInit() {

    //  We just use a few random countries, however, you can use the countries you need by just adding them to this list.
    // also you can use a library to get all the countries from the world.
    this.countries = [
      new CountryPhone('UY', 'Uruguay'),
      new CountryPhone('US', 'United States'),
      new CountryPhone('ES', 'España'),
      new CountryPhone('BR', 'Brasil'),
      new CountryPhone('FR', 'France')
    ];
    
    this.genders = [
      'Female',
      'Male',
    ];


  }
}
