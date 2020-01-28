import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnglishBotModule } from './english-bot.module';
import { FormsModule } from '@angular/forms';
import { AdminModule } from './admin/admin.module';
import { SharedModule } from './admin/shared/components/shared.module';
// import { AdminLayoutComponent } from './admin/shared/components/admin-layout/admin-layout.component'

@NgModule({
  declarations: [
    AppComponent,
    // AdminLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EnglishBotModule,
    FormsModule,
    AdminModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
