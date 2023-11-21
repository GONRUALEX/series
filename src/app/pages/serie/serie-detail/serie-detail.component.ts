import { Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Serie } from 'src/app/shared/models/serie';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.scss']
})
export class SerieDetailComponent {
  @Input("product") product: Serie = {};
  environmentApi:any = environment;
  constructor(
  ){
    
  }

  ngOnInit(){}
  visible: boolean = false;

    showDialog() {
        this.visible = true;
    }
}
