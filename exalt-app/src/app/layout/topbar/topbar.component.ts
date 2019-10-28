import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent {

  constructor(public popoverController: PopoverController) { }

  async presentPopover (event) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event:event,
      translucent: true
    });
    return await popover.present();
  }

}
