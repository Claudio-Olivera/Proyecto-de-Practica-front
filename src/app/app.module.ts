import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ONEComponent } from './one/one.component';
import { TWOComponent } from './two/two.component';

@NgModule({
  declarations: [
    AppComponent,
    ONEComponent,
    TWOComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
