import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: 'series'},
  {
    path:'series',
    loadChildren: (): Promise<any> =>
      import('../app/pages/serie/series.module').then((m)=>m.SeriesModule),
  },
  {path:'**', pathMatch: 'full', redirectTo: 'series'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
