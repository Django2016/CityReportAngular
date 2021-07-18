import { Component, OnInit } from '@angular/core';
import { AstronomyDTO } from '../Models/AstronomyDTO';
import { CurrentDTO } from '../Models/CurrentDTO';
import { LocationDTO } from '../Models/locationDTO';
import { CityReportService } from '../Services/city-report.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  locationholder : LocationDTO;
  currentholder : CurrentDTO;
  astronomyholder : AstronomyDTO;
  listcity = [  "Beijing", "Nairobi", "New York", "Mumbai", "Paris","Sydney","Yaounde"];
  constructor(private service: CityReportService) { }

  ngOnInit(): void {
   this.getData("Beijing");
  } 

  getData(selectedCity: string){
    this.service.getLocation(selectedCity).subscribe(result => {
      this.locationholder = result;
    });

    this.service.getCurrent(selectedCity).subscribe(result => {
      this.currentholder = result;
    });

    this.service.getAstronomy(selectedCity).subscribe(result => {
      this.astronomyholder = result;
    });
  }

}
