import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public incidents;

  constructor(public navCtrl: NavController, public api : ApiProvider) {
  }


  ionViewDidLoad() { 
    this.loadIncidents();
  }

  viewDetails() { 
    this.navCtrl.push('DetailPage');
  }

  public async loadIncidents() {
    this.incidents = await this.api.getIncidents();
    console.log(this.incidents);
  }

}
