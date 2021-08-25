import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalDetailsPageRoutingModule } from './personal-details-routing.module';

import { PersonalDetailsPage } from './personal-details.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalDetailsPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  declarations: [PersonalDetailsPage]
})
export class PersonalDetailsPageModule {}
