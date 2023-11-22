import { Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Detail, Serie } from 'src/app/shared/models/serie';
import { environment } from 'src/environments/environment.development';
import { SeriesService } from '../service/series.service';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.scss']
})
export class SerieDetailComponent {
  selectedSerie: Detail = this.newDetail();
  @Input("product") product: Serie = {};
  environmentApi: any = environment;
  constructor(private seriesService: SeriesService
  ) {

  }

  ngOnInit() { }
  visible: boolean = false;

  showDialog(id: number) {
    this.visible = true;
    this.seriesService.getById(id).subscribe(data => {
      this.selectedSerie = data;
    })
  }

  newDetail():Detail{
    return { adult: false,
      backdrop_path: "",
      belongs_to_collection: "",
      budget: 0,
      genres: [{}],
      homepage: "",
      id: 0,
      imdb_id: "",
      original_language: "",
      original_title: "",
      overview: "",
      popularity: 0,
      poster_path: "",
      production_companies: [{}],
      production_countries: [{}],
      release_date: "",
      revenue: 0,
      runtime: 0,
      spoken_languages: [{}],
      status: "",
      tagline: "",
      title: "",
      video: false,
      vote_average: 0,
      vote_count: 0,}
  }
}
