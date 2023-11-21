import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { DockModule } from 'primeng/dock';
import { PaginatorModule } from 'primeng/paginator';
import { DialogModule } from 'primeng/dialog';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenubarModule,
    CardModule,
    DockModule,
    PaginatorModule,
    DialogModule
  ],
  exports:[
    MenubarModule,
    CardModule,
    DockModule,
    PaginatorModule,
    DialogModule
  ]
})
export class PrimengModule { }
