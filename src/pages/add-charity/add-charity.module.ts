import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddCharityPage } from './add-charity';

@NgModule({
  declarations: [
    AddCharityPage,
  ],
  imports: [
    IonicPageModule.forChild(AddCharityPage),
  ],
})
export class AddCharityPageModule {}
