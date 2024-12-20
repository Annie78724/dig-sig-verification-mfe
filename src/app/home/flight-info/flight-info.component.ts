import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flight-info',
  standalone: true,
  imports: [],
  templateUrl: './flight-info.component.html',
  styleUrl: './flight-info.component.scss'
})
export class FlightInfoComponent {

    @Input() flightDetails!: {
      flightId: string;
      departure: {
        time: string;
        place: string;
      };
      duration: {
        time: string;
        type: string;
      };
      arrival: {
        time: string;
        place: string;
      };
      booking: {
        class: string;
        price: string;
        rewardPoints: string;
      };
    };
  
}
