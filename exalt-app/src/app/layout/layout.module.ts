import {NgModule} from '@angular/core';
import { TopbarComponent } from './topbar/topbar.component';
import { BottombarComponent } from './bottombar/bottombar.component';
import { PopoverComponent } from './popover/popover.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@NgModule({
    imports:[
        CommonModule,
        IonicModule,
    ],
    declarations:[TopbarComponent,BottombarComponent,PopoverComponent],
    exports:[TopbarComponent,BottombarComponent,PopoverComponent],
    entryComponents:[PopoverComponent]
})
export class LayoutModule{}