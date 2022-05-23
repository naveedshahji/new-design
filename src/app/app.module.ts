import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { DisplayContentComponent } from './display-content/display-content.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    PageHeaderComponent,
    PageFooterComponent,
    DisplayContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MainMenuComponent,
    PageHeaderComponent,
    PageFooterComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
