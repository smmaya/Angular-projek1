import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  calculatedAge = '';
  yearOfBirth: any = '';

  constructor() { }

  ngOnInit() {
  }

  getCurrentYear() {
      const currentYear = new Date().getFullYear();
      return currentYear;
  }

  calculateAge() {
    const result: any = this.getCurrentYear() - this.yearOfBirth;
    document.getElementById('calculatedAge').innerText = result;
  }


}
