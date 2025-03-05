import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  baseUrl: string = 'http://api.weatherapi.com/v1/current.json'

  getWeatherDetails(city: string): Observable<any> {
    const params = new HttpParams()
      .append('key', 'db403e8af1aa4ff296325345240612')
      .append('q', city)
      .append('aqi', 'no');

    return this.httpClient.get(this.baseUrl, {params: params})
  }
}
