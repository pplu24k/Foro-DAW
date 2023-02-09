import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaPageComponent } from './categoria-page/categoria-page.component';
import { HilosModule } from '../hilos/hilos.module';
import { RouterModule } from '@angular/router';




@NgModule({
    declarations: [
        CategoriaPageComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        HilosModule,

    ]
})
export class CategoriaModule { }
