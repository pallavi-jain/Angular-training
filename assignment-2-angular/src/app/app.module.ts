import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddressComponent } from './app.address.component';
import { UserComponent } from './app.user.component';
import { CompanyComponent} from './app.company.component';

@NgModule({
  declarations: [
    AppComponent,AddressComponent, UserComponent, CompanyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
