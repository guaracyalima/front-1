import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SiteHeadModule} from "./site-head/site-head.module";
import {MainModule} from "./main/main.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
      SiteHeadModule,
      MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
