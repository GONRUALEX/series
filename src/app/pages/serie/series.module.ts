import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { SeriesRoutingModule } from './series-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PrimengModule } from 'src/app/shared/primeng.module';
import { SerieComponent } from './serie.component';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';
@NgModule({
  declarations: [SerieComponent, SerieDetailComponent],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    SeriesRoutingModule,
    PrimengModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.cubeGrid,
      backdropBackgroundColour: "rgb(0, 128, 128,0.2)",
      backdropBorderRadius: "200px",
      primaryColour: "#008080",
      secondaryColour: "#ffffff",
      tertiaryColour: "#ffffff",
    }),
  ]
})
export class SeriesModule { }
