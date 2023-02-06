import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriaModule } from './categoria/categoria.module';
import { HomeComponent } from './home/home.component';
import { SubforoCategoriasComponent } from './subforo-categorias/subforo-categorias.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SubforoCategoriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CategoriaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
