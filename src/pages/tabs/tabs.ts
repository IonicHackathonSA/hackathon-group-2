import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { VolunteerPage } from '../volunteer/volunteer';
import { HomePage } from '../home/home';
import { AdminPage } from '../admin/admin';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = VolunteerPage;
  tab3Root = AdminPage;
  tab4Root = AboutPage;

  constructor() {

  }
}
