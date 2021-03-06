import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Event} from '../../models/event';
import { FirebaseProvider } from '../../providers/firebase/firebase';

/**
 * Claire Gizard -- 1106363
 * Pierre Munin -- 1106420
 */
@IonicPage()
@Component({
  selector: 'page-add-event',
  templateUrl: 'add-event.html',
})
export class AddEventPage {

  newItem = {} as Event;

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEventPage');
  }

  private addEvent() {
    this.firebaseProvider.addItem(this.newItem);
    this.navCtrl.pop();
  }
}
