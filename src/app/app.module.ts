import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriaModule } from './categoria/categoria.module';
import { HomeComponent } from './home/home.component';
import { LogModule } from './log/log.module';

import { HttpClientModule } from '@angular/common/http';
import { SectionNavComponent } from './section-nav/section-nav.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    SectionNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LogModule,
    HttpClientModule,
    AppRoutingModule,
    CategoriaModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
