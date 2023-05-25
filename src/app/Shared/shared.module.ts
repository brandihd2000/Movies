import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieServiceService } from './Services/movie.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule
  ], 
  exports: [],
  providers: [MovieServiceService]
})
export class SharedModule { }
