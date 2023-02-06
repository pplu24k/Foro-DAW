import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaPageComponent } from './categoria/categoria-page/categoria-page.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
/*
  {path:'foro/:subforo' , children:[
    {path:':categoria', component:CategoriaPageComponent}
  ]}*/
  {path: '', component: HomeComponent},
  {path:'foro/:subforo/:categoria', component:CategoriaPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
