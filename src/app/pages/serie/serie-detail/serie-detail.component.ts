import { Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Serie } from 'src/app/shared/models/serie';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.scss']
})
export class SerieDetailComponent {
  @Input("product") product: Serie = {};

  constructor(
  ){}

  ngOnInit(){}

}
