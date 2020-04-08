import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  public incident: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public socialSharing: SocialSharing
  ) {

  }

  ionViewDidLoad() {
    this.incident = this.navParams.data.incident;
    console.log(this.incident);
  }

  sendWppMessage() {
    let message = `Olá ${this.incident.name}, estou entrando em contato pois gostaria de ajudar no caso: "${this.incident.title}" com o valor de R$ ${this.incident.value};`

    this.socialSharing.shareViaWhatsApp(message, null, null)
      .then((sucess) => {
        console.log('Mensagem enviada com sucesso!', sucess);
      }).catch((err) => {
        console.log(err);
      });
  }

  sendEmailMessage() {
    let message = `Olá ${this.incident.name}, estou entrando em contato pois gostaria de ajudar no caso: "${this.incident.title}" com o valor de R$ ${this.incident.value};`
    this.socialSharing.shareViaEmail(
      message,
      `Herói do caso: ${this.incident.title}`,
      [this.incident.email],
    ).then((sucess) => {
      console.log("Email enviado com sucesso!", sucess);
    }).catch((err) => {
      console.log(err);
    })
  }

  backToHome() {
    this.navCtrl.push(HomePage);
  }

}
