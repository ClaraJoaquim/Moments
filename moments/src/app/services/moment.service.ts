import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Moment } from '../Moments';
import { Response } from '../Response';


@Injectable({
  providedIn: 'root'
})
export class MomentService {
  private baseApiUrl = "http://localhost:3333/";
  private ApiUrl = `${this.baseApiUrl}api/moments`;

  constructor(private http:HttpClient) { }

  getMoments(): Observable<Response<Moment[]>> {
    return this.http.get<Response<Moment[]>>(this.ApiUrl);
  }

  createMoment(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.ApiUrl, formData);
  }

  getItemMoment(id: number): Observable<Response<Moment>> {
    return this.http.get<Response<Moment>>(`${this.ApiUrl}/${id}`);
  }

  remove (id: number) {
    return this.http.delete(`${this.ApiUrl}/${id}`);
  }

  editMoment(id: number, formData: FormData): Observable<FormData> {
    return this.http.put<FormData>(`${this.ApiUrl}/${id}`, formData);
  }

}
