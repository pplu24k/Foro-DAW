import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriaModule } from './categoria/categoria.module';
import { HomeComponent } from './home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { SectionNavComponent } from './section-nav/section-nav.component';
import { SubforoCategoriasComponent } from './subforo-categorias/subforo-categorias.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    SectionNavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AppRoutingModule,
    CategoriaModule,
    SubforoCategoriasComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
