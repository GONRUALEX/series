import { Component, OnInit } from '@angular/core';
import { SeriesService } from './service/series.service';
import { MenuItem } from 'primeng/api';
import { Gener, MasterTable } from 'src/app/shared/models/master-table';
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
  constructor(private seriesService: SeriesService, private toastr: ToastrService) {

  }
  ngOnInit(): void {
    this.seriesService.getGenerList().subscribe((data: Gener) => {
      this.items = data != null ? data.genres!.map((category: MasterTable) => {
        return { "id": category.id?.toString(), "label": category.name };
      }) : [];
    })
  }

  gener(element: MenuItem) {
    this.loading = true;
    console.log("elementosss", element)
    this.seriesService.getList(element.id!).subscribe({
      next: (data: PageRequest) => {
        console.log(data)
        this.products = data.results!;
        this.loading = false;
      },
      error: (err) => {
        this.errMsj = err.error != null ? err.error.mensaje : "No se ha actualizado";
        this.toastr.error(this.errMsj + " 😒", 'Se ha encontrado un problema', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
      }
    })
  }
}
