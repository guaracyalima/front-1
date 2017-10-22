import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import {BoxesModule} from "../boxes/boxes.module";
import {AboutModule} from "../about/about.module";

@NgModule({
  imports: [
    CommonModule,
      BoxesModule,
      AboutModule
  ],
  declarations: [MainComponent],
    exports: [
        MainComponent
    ]
})
export class MainModule { }
