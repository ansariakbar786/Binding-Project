import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './emp/employee.component';
import { CutomerComponent } from './2wayBind/cutomer.component';
import { CustomerComponent } from './customer/customercomponent';
import { PublisherComponent } from './customer/publishercomponent';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, CustomerComponent, PublisherComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
