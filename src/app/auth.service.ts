import { Injectable } from '@angular/core';
import 'firebase/auth';
import {AlertController} from '@ionic/angular';
import {LoadingService} from './loading.service';
import {SharedDataService} from './shared-data.service';
import firebase from 'firebase';




declare var window;
@Injectable({
  providedIn: 'root'
})

export class AuthService {



  constructor(
      public loading: LoadingService,
      public shared: SharedDataService,
      public alertController: AlertController,
     // public appEventsService: AppEventsService,
  ) {

  }


  //=================================
  createRecaptcha() {
    let _this = this;
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('phone-login-in-button', {
      'size': 'invisible',
      'callback': function (response) {
        console.log(response);
      }
    });
  }


  //================================= function to verify send code
  verifyPhoneNumber(phoneNumber) {
    this.loading.show();
    let _this = this;
    firebase.auth().signInWithPhoneNumber(phoneNumber, window.recaptchaVerifier).then(function (confirmationResult) {
      _this.loading.hide();
      _this.enterThePhoneCodeReceived(phoneNumber).then((data: any) => {

        if (data != null)
          confirmationResult.confirm(data).then((data: any) => {
            _this.loginAfterCodeVerify(phoneNumber);
          }).catch(
              (error) => {
                this.shared.showAlert(data + " " + "Invalid Code Please try again.");
                console.log(error)
                //_this.errorMessage = error.message
              });
      })
    }).catch(
        (error) => {
          _this.loading.hide();
          console.log(error);
          this.shared.showAlert(error.message + " " + phoneNumber);
        });
  }

  async enterThePhoneCodeReceived(phoneNumber) {
    return new Promise(async resolve => {

      const alert = await this.alertController.create({
        header: "Enter Sms Code You Received on" + " " + phoneNumber,
        inputs: [
          {
            name: 'code',
            type: 'text',
            placeholder: "Code",
          }
        ],
        buttons: [
          {
            text: "Cancel",
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              resolve(null);
              console.log('Confirm Cancel');
            }
          }, {
            text: "ok",
            handler: (data) => {
              console.log(data);
              if (data.code == "")
                this.enterThePhoneCodeReceived(phoneNumber).then(data => {
                  resolve(data);
                })
              else
                resolve(data.code);
            }
          }
        ]
      });

      await alert.present();
    });



  }

  loginAfterCodeVerify(phoneNumber) {
    //this.appEventsService.publish("loginWithPhoneNumber", phoneNumber);
  }
}
