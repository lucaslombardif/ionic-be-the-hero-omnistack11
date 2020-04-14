import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public incidents;
  public totalIncidents;

  constructor(public navCtrl: NavController, public api: ApiProvider) {
  }

  ionViewDidLoad() {
    this.loadIncidents();
    this.getTotalIncidents();
  }

  viewDetails(incident) {
    this.navCtrl.push('DetailPage', { incident });
  }

  public async loadIncidents() {
    this.incidents = await this.api.getIncidents();
    console.log(this.incidents);
  }

  public async getTotalIncidents() {
    this.totalIncidents = await this.api.getCount();
    console.log(this.totalIncidents);
  }

}
