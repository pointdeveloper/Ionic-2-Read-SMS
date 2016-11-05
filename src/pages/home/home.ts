import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var window: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public smses:any;
  constructor(public navCtrl: NavController) {
    
  }
 getSMS(){
    if(window.SMS) window.SMS.listSMS({},data=>{
        setTimeout(()=>{
            console.log(data);
            this.smses=data;
        },0)

    },error=>{
      console.log(error);
    });
  }
}
