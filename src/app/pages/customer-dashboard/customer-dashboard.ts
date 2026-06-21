import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-customer-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './customer-dashboard.html',
  styleUrls: ['./customer-dashboard.css']
})
export class CustomerDashboardComponent {

  customerName = 'Anusiya';

  isSidebarOpen = false;

  /* ACTIVE MENU */
  selectedMenu = 'dashboard';

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

}