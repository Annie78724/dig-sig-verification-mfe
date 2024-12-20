import { Component } from '@angular/core';
import { FlightInfoComponent } from "./flight-info/flight-info.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FlightInfoComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  flightDetails = [
    {
      flightId: "6E 6114",
      departure: {
        time: "22:00",
        place: "DEL, T1D",
      },
      duration: {
        time: "02h 25m",
        type: "Non-stop",
      },
      arrival: {
        time: "00:25",
        place: "BOM, T2",
      },
      booking: {
        class: "Economy",
        price: "₹8,728",
        rewardPoints: "+ Earn 941 IndiGo BluChips",
      },
    },
    {
      flightId: "6E 6561",
      departure: {
        time: "18:30",
        place: "BLR, T1",
      },
      duration: {
        time: "01h 50m",
        type: "Non-stop",
      },
      arrival: {
        time: "20:20",
        place: "HYD, T2",
      },
      booking: {
        class: "Economy",
        price: "₹5,499",
        rewardPoints: "+ Earn 600 IndiGo BluChips",
      },
    },
    {
      flightId: "6E 6213",
      departure: {
        time: "10:00",
        place: "DEL, T1C",
      },
      duration: {
        time: "03h 10m",
        type: "Non-stop",
      },
      arrival: {
        time: "13:10",
        place: "CCU, T1",
      },
      booking: {
        class: "Business",
        price: "₹14,500",
        rewardPoints: "+ Earn 1,200 IndiGo BluChips",
      },
    },
    {
      flightId: "6E 8102",
      departure: {
        time: "06:15",
        place: "HYD, T1",
      },
      duration: {
        time: "02h 30m",
        type: "Non-stop",
      },
      arrival: {
        time: "08:45",
        place: "MAA, T2",
      },
      booking: {
        class: "Economy",
        price: "₹6,800",
        rewardPoints: "+ Earn 650 IndiGo BluChips",
      },
    },
    {
      flightId: "6E 4472",
      departure: {
        time: "12:45",
        place: "CCU, T2",
      },
      duration: {
        time: "01h 55m",
        type: "Non-stop",
      },
      arrival: {
        time: "14:40",
        place: "NOI, T1",
      },
      booking: {
        class: "Economy",
        price: "₹5,999",
        rewardPoints: "+ Earn 610 IndiGo BluChips",
      },
    },
  ];
  

}
