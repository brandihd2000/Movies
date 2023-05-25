import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './Module/Page/Movies/movie/movie.component';
import { DetailComponent } from './Module/Page/Movies/detail/detail.component';

const routes: Routes = [
  {
    path: '*',
    component: MovieComponent
  }, 
  {
    path: '',
    component: MovieComponent
  },
  {
    path: 'home',
    component: MovieComponent
  },
  {
    path: 'detail/:id',
    component: DetailComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
