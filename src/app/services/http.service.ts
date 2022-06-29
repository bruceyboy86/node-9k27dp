import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  getList() {
    return this.httpClient.get<any[]>('../assets/list.json');
  }
  getListObservable(): Observable<any[]> {
    return this.httpClient.get<any[]>('../assets/list.json');
  }
}