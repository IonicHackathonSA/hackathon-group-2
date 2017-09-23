import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Charity } from './charity.models';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  charities: Charity[]= [];

  constructor(public navCtrl: NavController) {

  }

  ionViewCanEnter(){
    this.getCharities();
  }


  getCharities():void{

    for(let i=1; i< 10; i++){

      let charity = new Charity();
      charity.name = "Charity name "+i
      charity.primaryInfo = "Some primary details abot the charity here."
      this.charities.push(charity);
    }
    
  }

}
