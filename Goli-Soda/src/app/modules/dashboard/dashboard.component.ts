import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cratesToReturn: number = 120;

  sales = {
    total: 120000,
    today: 3500
  };

  production = {
    today: 450,
    week: 3100
  };

  customers = {
    total: 220,
    new: 5
  };

  productions = {
    today: 243,  // Example value
    week: 3100
  };
  
  crates = {
    full: Math.floor(this.productions.today / 24),
    remaining: this.productions.today % 24
  };

  

  constructor() { }

  ngOnInit(): void {
    this.updateCrates();
  }

  updateCrates() {
    const bottles = this.productions.today;
    this.crates = {
      full: Math.floor(bottles / 24),
      remaining: bottles % 24
    };
  }

  public salesChartType: ChartType = 'pie';

  public salesChartData: ChartData<'pie', number[], string | string[]> = {
    labels: ['Shipped/Sold Bottles', 'Returned Bottles', 'In Production/Factory'],
    datasets: [
      {
        data: [1200, 300, 900], // Example values, update with real data if needed
        backgroundColor: ['#42A5F5', '#FFA726', '#66BB6A'],
      }
    ]
  };
  

  // Bar Chart for Production Tracker
  public productionChartType: ChartType = 'bar';
  public productionChartData: ChartData<'bar'> = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    datasets: [
      {
        label: 'Bottles Produced',
        data: [100, 120, 150, 130, 170],
        backgroundColor: '#42A5F5',
      }
    ]
  };

  // Line Chart for Customer Overview
  public customerChartType: ChartType = 'line';
  public customerChartData: ChartData<'line'> = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'New Customers',
        data: [10, 15, 20, 25],
        borderColor: '#66BB6A',
        fill: false,
      }
    ]
  };

}
