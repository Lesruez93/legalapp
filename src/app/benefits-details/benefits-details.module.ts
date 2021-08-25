import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BenefitsDetailsPageRoutingModule } from './benefits-details-routing.module';

import { BenefitsDetailsPage } from './benefits-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BenefitsDetailsPageRoutingModule
  ],
  declarations: [BenefitsDetailsPage]
})
export class BenefitsDetailsPageModule {}
