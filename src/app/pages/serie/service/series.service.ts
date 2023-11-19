import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Serie } from 'src/app/shared/models/serie';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private baseUrl = environment.api.baseUrl;
  private endPoint = environment.api.series;
  constructor(private http: HttpClient) { }

  public getList(): Observable<Serie[]> {
    const endPoint = this.endPoint.list;
    const url = this.baseUrl + endPoint;

    return this.http.get<Serie[]>(url);
  }

  public getById(idSerie: number): Observable<Serie> {
    const endpoint = this.endPoint.getById
      .replace('{id}', idSerie.toString());
    const url = this.baseUrl + endpoint;
    return this.http.get<Serie>(url);
  }

  public getGenerList(): Observable<Serie> {
    const endpoint = this.endPoint.listGener;
    const url = this.baseUrl + endpoint;
    return this.http.get<Serie>(url);
  }
}
