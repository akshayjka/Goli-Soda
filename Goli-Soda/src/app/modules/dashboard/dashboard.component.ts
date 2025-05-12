import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

  public salesChartType: ChartType = 'pie';
  public salesChartData: ChartData<'pie', number[], string | string[]> = {
    labels: ['Cash Sales', 'Credit Sales', 'Online Sales'],
    datasets: [
      {
        data: [5000, 3000, 2000],
        backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726'],
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
