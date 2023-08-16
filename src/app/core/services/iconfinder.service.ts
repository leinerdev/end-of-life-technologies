import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconfinderService {

  private API_URL = 'https://api.iconfinder.com/v4/icons';

  constructor(private http: HttpClient) { }

  getIconByParam(param: string) {
    const URL = `${this.API_URL}/search?query=${param}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer J62uTfRA6b2wvlTcr59WGVu6b1Wob29wdm76NERCoxjGV8YMdta5p1AGYGJpKnU9'
    });
    return this.http.get(URL, { headers });
  }


}
