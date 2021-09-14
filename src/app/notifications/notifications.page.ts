import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: [
    './styles/notifications.page.scss',
    './styles/notifications.shell.scss'
  ]
})
export class NotificationsPage implements OnInit {
  notifications: any;
  radar: any;

  constructor(private route: ActivatedRoute,
              private toastCtrl:ToastController,
              ) { }

  ngOnInit(): void {

  }


  shareLocation(){
    this.radar = !this.radar
    this.showToast()
  }

  async  showToast(){
   const toast = await this.toastCtrl.create({
      message:"Live location sharing started....",
      position:'bottom',
      duration:20000,
     color:"success"
    })

    await toast.present()
  }
}
