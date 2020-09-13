import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RootParentComponent } from './root-parent/root-parent.component';
import { RootChildComponent } from './root-child/root-child.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ErrorPageComponentComponent } from './error-page-component/error-page-component.component';

@NgModule({
  declarations: [
    AppComponent,
    RootParentComponent,
    RootChildComponent,
    HomePageComponent,
    ErrorPageComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
