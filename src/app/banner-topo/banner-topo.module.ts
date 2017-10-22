import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerTopoComponent } from './banner-topo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BannerTopoComponent],
    exports: [
        BannerTopoComponent
    ]
})
export class BannerTopoModule { }
