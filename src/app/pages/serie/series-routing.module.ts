import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SerieComponent } from './serie.component';
const routes: Routes = [
  {
    path: '',
    component: SerieComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class SeriesRoutingModule { }
