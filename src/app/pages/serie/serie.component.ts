import { Component, OnInit } from '@angular/core';
import { SeriesService } from './service/series.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.scss']
})
export class SerieComponent implements OnInit{
  constructor(private seriesService:SeriesService){
    
  }
  ngOnInit(): void {
    this.seriesService.getGenerList().subscribe((data:any)=>{
      console.log(data)
    })
  }
}
