import { Injectable } from '@angular/core';
import {AlertController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor(
      public alertController: AlertController,
  ) { }

  showAlert(s: string) {


  }
}
