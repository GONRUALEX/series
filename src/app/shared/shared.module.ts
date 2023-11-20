import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from './primeng.module';
import { MenuComponent } from './components/menu/menu.component';



@NgModule({
  declarations: [ MenuComponent],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports:[MenuComponent]
})
export class SharedModule { }
