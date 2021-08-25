import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  loading;
  constructor(
      public loadingCtrl: LoadingController
  ) {

  }


  async showw() {
    this.loading = await this.loadingCtrl.create({
      keyboardClose:false,



    });
    this.loading.present();
  }

  async show() {
    this.loading = await this.loadingCtrl.create({
      duration: 10000


    });
    this.loading.present();
  }
  hide() {

    this.loading.dismiss();

  }
  async autoHide(time) {
    this.loading = await this.loadingCtrl.create({
      duration: time
    });
    this.loading.present();
  }
}
