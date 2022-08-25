import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AComponent } from './core/pages/a.component';
import { BComponent } from './core/pages/b.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, AComponent, BComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
