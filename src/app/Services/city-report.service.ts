import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {LocationDTO} from "../Models/locationDTO";
import {CurrentDTO} from "../Models/CurrentDTO";
import {AstronomyDTO} from "../Models/AstronomyDTO";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityReportService {

  constructor(private http: HttpClient) { }

  getLocation(name : string) : Observable<LocationDTO> {
    return this.http.get<LocationDTO>("https://localhost:44316/api/CityReport/location/" + name);
  }

  getCurrent(name : string) : Observable<CurrentDTO> {
    return this.http.get<CurrentDTO>("https://localhost:44316/api/CityReport/current/" + name);
  }

  getAstronomy(name : string) : Observable<AstronomyDTO> {
    return this.http.get<AstronomyDTO>("https://localhost:44316/api/CityReport/astronomy/" + name);
  }

}
