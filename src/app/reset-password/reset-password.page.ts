import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  b1:any
  b2:any
  b3:any
  b4:any
  b5:any
  b6:any

  showPassword = false
  passwordIcon = 'eye'
  showPasswordC = false
  passwordIconC = 'eye'
  data : {password:string , email:string , reset_code :string}={password:'' , email:null , reset_code:''}
  confirm:any
  setCode:boolean
 loading: HTMLIonLoadingElement;

  constructor(public  navCtrl: NavController) { 

  }

  async reset() {}
  async getCode() {}

  resend(){
    this.setCode = false
}

togglePassword(){
  this.showPassword = !this.showPassword
  if(this.passwordIcon === 'eye'){
    this.passwordIcon = 'eye-off'
  }
  else{
    this.passwordIcon = 'eye'
  }
}
togglePasswordC(){
  this.showPasswordC = !this.showPasswordC
  if(this.passwordIconC === 'eye'){
    this.passwordIconC = 'eye-off'
  }
  else{
    this.passwordIconC = 'eye'
  }
}

checkPasswords() {

}

  keytab(nextElement: any) {
     // nextElement.focusNext();
       nextElement.setFocus();
  }

  ngOnInit() {
  }

}
