import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { DockModule } from 'primeng/dock';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenubarModule,
    CardModule,
    DockModule,
  ],
  exports:[
    MenubarModule,
    CardModule,
    DockModule
  ]
})
export class PrimengModule { }
