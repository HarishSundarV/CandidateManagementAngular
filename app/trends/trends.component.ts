import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { LocationCount } from '../locationCount';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})

export class TrendsComponent implements OnInit {
  constructor(private userService: UserserviceService) { }
  title = 'Angular Charts';
 
  count:LocationCount;
  counts:any;
  view: any[] = [600, 400];
single;
  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Locations';
  showYAxisLabel = true;
  yAxisLabel = 'Number of people';
  timeline = true;

  colorScheme = {
    domain: ['red', 'blue', 'black', 'brown', 'yellow', 'green']
  };
  showLabels = true;
  ngOnInit(): void {
    
    this.userService.countByLocation().subscribe(trends => {
   console.log(trends)
      let data: any[] =[];
      for (let trend of trends)
      {
         data.push({
             "name" : trend.location,
             "value" : trend.count,
          })
         }
        this.single =data;
      });
      
 
  }

}
