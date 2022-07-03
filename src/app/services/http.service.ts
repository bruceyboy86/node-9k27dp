import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IfileList } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  getListObservable(): Observable<IfileList[]> {
    return this.httpClient.get<IfileList[]>('../assets/list.json');
  }
}
