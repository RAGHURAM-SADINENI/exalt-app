import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AppsPage } from './apps.page';
import { LayoutModule } from 'src/app/layout/layout.module';

const routes: Routes = [
  {
    path: '',
    component: AppsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    LayoutModule
  ],
  declarations: [AppsPage]
})
export class AppsPageModule {}
