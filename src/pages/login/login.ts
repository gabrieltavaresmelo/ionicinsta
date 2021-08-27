import { Component } from '@angular/core';
import { AlertController, IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { AutenticacaoProvider } from '../../providers/autenticacao/autenticacao';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email = '';
  senha = '';

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public autenticacaoProvider: AutenticacaoProvider
    ) {
  }

  ionViewCanEnter() {
    console.log('ionViewCanEnter LoginPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage [CARREGA NA CRIACAO DA TELA]');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter LoginPage');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter LoginPage');
  }

  ionViewWillLeave() {
    
  }

  ionViewDidLeave() {

  }

  ionViewWillUnload() {

  }

  ionViewCanLeave() {

  }

  entrar() {
    console.log('entrar');

    const loader = this.loadingCtrl.create({
      content: "Aguarde...",
    });
    loader.present();

    this.autenticacaoProvider.login(this.email, this.senha).subscribe( (data: any) => {
      console.log('resposta', data);
      loader.dismiss();

      if(data.logado === true) {
        console.log('USUARIO LOGADO');
        this.navCtrl.setRoot(TabsPage);

      } else {
        const alert = this.alertCtrl.create({
          title: 'Erro',
          subTitle: 'Verifique suas credenciais de acesso.',
          buttons: ['OK']
        });
        alert.present();
      }

    }, error => {
      console.log('erro', error);
      loader.dismiss();
      
      const alert = this.alertCtrl.create({
        title: 'Offline',
        subTitle: 'Verifique sua conexão com a internet!',
        buttons: ['OK']
      });
      alert.present();
    });

    // this.navCtrl.setRoot(TabsPage);
  }

  cadastrar() {
    this.navCtrl.push('CadastrarPage');
  }

}
