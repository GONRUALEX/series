import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Detail, PageRequest, Serie } from 'src/app/shared/models/serie';
import { Observable } from 'rxjs';
import { Gener } from 'src/app/shared/models/master-table';
@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private baseUrl = environment.api.baseUrl;
  private endPoint = environment.api.series;
  constructor(private http: HttpClient) { }

  public getList(first:number): Observable<PageRequest> {
    const endPoint = this.endPoint.list
    .replace('{first}', first.toString());
    const url = this.baseUrl + endPoint;
    return this.http.get<PageRequest>(url);
  }

  public getById(idSerie: number): Observable<Detail> {
    const endpoint = this.endPoint.getById
      .replace('{id}', idSerie.toString());
    const url = this.baseUrl + endpoint;
    return this.http.get<Detail>(url);
  }

  public getGenerList(): Observable<Gener> {
    const endpoint = this.endPoint.listGener;
    const url = this.baseUrl + endpoint;
    return this.http.get<Gener>(url);
  }
}
