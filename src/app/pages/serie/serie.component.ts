import { Component, OnInit } from '@angular/core';
import { SeriesService } from './service/series.service';
import { MenuItem } from 'primeng/api';
import { Gener, MasterTable, PageEvent } from 'src/app/shared/models/master-table';
import { PageRequest, Serie } from 'src/app/shared/models/serie';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.scss']
})
export class SerieComponent implements OnInit {
  loading = false;
  errMsj: string = '';
  items: MenuItem[] | undefined = [];
  products: Serie[] = [];
  page:number = 1;
  first: number = 0;
  rows: number = 20;
  totalRecords: number = 0;
  categorySelected: MenuItem = {};
  constructor(private seriesService: SeriesService, private toastr: ToastrService) {

  }
  ngOnInit(): void {
    this.seriesService.getGenerList().subscribe((data: Gener) => {
      this.items = data != null ? data.genres!.map((category: MasterTable) => {
        return { "id": category.id?.toString(), "label": category.name };
      }) : [];
    })

    this.gener();
  }

  gener(element: MenuItem = this.categorySelected) {
    this.loading = true;
    if (element!=this.categorySelected){
      this.page = 1;
    }
    this.seriesService.getList(this.page).subscribe({
      next: (data: PageRequest) => {
        this.products = data.results!;
        this.totalRecords = data.total_results!;
        this.loading = false;
        this.categorySelected= element;
      },
      error: (err) => {
        this.errMsj = "Error al cargar "+ element.label;
        this.loading = false;
        this.toastr.error(this.errMsj + " 😒", 'Se ha encontrado un problema', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
      },
      complete: () => {
        this.loading = false;
      }
    })
  }

  onPageChange(event: any) {
    this.page = Math.floor((event.first+21)/event.rows);
    this.first = event.first;
    this.rows = event.rows;
    this.gener();
  }
}
