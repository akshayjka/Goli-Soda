import { ChangeDetectorRef, Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { CustomerComponent } from 'src/app/modules/customer/customer.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { ProductionTrackerComponent } from 'src/app/modules/production-tracker/production-tracker.component';
import { SalesTrackerComponent } from 'src/app/modules/sales-tracker/sales-tracker.component';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  selectedMenu: string = 'dashboard';


  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  private componentRef!: ComponentRef<any>;

  loadComponent(componentName: string) {

    this.selectedMenu = componentName;
    // Clear the container
    this.container.clear();

    // Determine which component to load
    let component: any;
    switch (componentName) {
      case 'dashboard':
        component = DashboardComponent;
        break;
      case 'customers':
        component = CustomerComponent;
        break;
      case 'production':
        component = ProductionTrackerComponent;
        break;
        case 'sales':
          component = SalesTrackerComponent;
          break;
      // case 'logout':
      //   component = LoginComponent;
      //   break;
      default:
        component = DashboardComponent;
    }

    // Create the component
    this.componentRef = this.container.createComponent(component);
  }

  menuItems = [
    { label: 'Dashboard', value: 'dashboard' },
    { label: 'Customers', value: 'customers' },
    { label: 'Production-Tracker', value: 'production' },
    { label: 'Sales-Tracker (Admin-Only)', value: 'sales' },
    // { label: 'Logout', value: 'logout' }
  ];


  ngAfterViewInit() {
    // Load the default component
    this.loadComponent('dashboard');
  }

  logout() {
    this.route.navigateByUrl('login')
  }

}
