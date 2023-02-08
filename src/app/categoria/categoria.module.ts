import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaPageComponent } from './categoria-page/categoria-page.component';
import { HilosModule } from '../hilos/hilos.module';




@NgModule({
    declarations: [
        CategoriaPageComponent
    ],
    imports: [
        CommonModule,
        HilosModule,

    ]
})
export class CategoriaModule { }
