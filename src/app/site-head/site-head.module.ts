import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteHeadComponent } from './site-head.component';
import {MenuModule} from "../menu/menu.module";
import {BannerTopoModule} from "../banner-topo/banner-topo.module";

@NgModule({
  imports: [
    CommonModule,
      MenuModule,
      BannerTopoModule,
  ],
  declarations: [SiteHeadComponent],
    exports: [
        SiteHeadComponent
    ]
})
export class SiteHeadModule { }
