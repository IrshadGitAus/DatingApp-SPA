import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';

import {HttpClientModule} from '@angular/common/http';
import { NavComponent } from './nav/nav.component';

import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RegsiterComponent } from './regsiter/regsiter.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import {BsDropdownModule} from 'ngx-bootstrap';

@NgModule({
   declarations: [
      AppComponent,
      ValueComponent,
      NavComponent,
      HomeComponent,
      RegsiterComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BsDropdownModule.forRoot()
   ],
   providers: [
      ErrorInterceptorProvider
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
