import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './Page/Movies/detail/detail.component';
import { MovieComponent } from './Page/Movies/movie/movie.component';
import { SharedModule } from '../Shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MovieComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule, 
    FormsModule,
  ]
})
export class ModuleModule { }
