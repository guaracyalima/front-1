import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxesComponent } from './boxes.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BoxesComponent],
    exports: [
        BoxesComponent
    ]
})
export class BoxesModule { }
