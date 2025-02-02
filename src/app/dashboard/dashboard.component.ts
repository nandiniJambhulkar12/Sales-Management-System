// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { UserService } from '../user.service';

// interface Product {
//   id: number;
//   name: string;
//   license: string;
//   agent: string;
//   technology: string;
//   tickets: number;
//   sales: number;
//   earnings: number;
//   badgeClass: string;
// }

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']
// })
// export class DashboardComponent {
//   products: Product[] = [
//     {
//       id: 1,
//       name: 'Elite Admin',
//       license: 'Single Use',
//       agent: 'John Doe',
//       technology: 'Angular',
//       tickets: 50,
//       sales: 100,
//       earnings: 5000.0,
//       badgeClass: 'angular'
//     },
//     {
//       id: 2,
//       name: 'Monster Admin',
//       license: 'Single Use',
//       agent: 'Jane Smith',
//       technology: 'Vue.js',
//       tickets: 30,
//       sales: 75,
//       earnings: 3000.0,
//       badgeClass: 'vuejs'
//     },
//     {
//       id: 3,
//       name: 'Material Pro Admin',
//       license: 'Single Use',
//       agent: 'Bob Johnson',
//       technology: 'Bootstrap',
//       tickets: 40,
//       sales: 90,
//       earnings: 4000.0,
//       badgeClass: 'bootstrap'
//     },
//     {
//       id: 4,
//       name: 'Ample Admin',
//       license: 'Multi-Use',
//       agent: 'Alice Brown',
//       technology: 'React',
//       tickets: 20,
//       sales: 60,
//       earnings: 2500.0,
//       badgeClass: 'react'
//     },
//     {
//       id: 3,
//       name: 'Material Pro Admin',
//       license: 'Single Use',
//       agent: 'Bob Johnson',
//       technology: 'Bootstrap',
//       tickets: 40,
//       sales: 90,
//       earnings: 4000.0,
//       badgeClass: 'bootstrap'
//     },
//     {
//       id: 6,
//       name: 'Monster Admin',
//       license: 'Single Use',
//       agent: 'Jane Smith',
//       technology: 'Vue.js',
//       tickets: 30,
//       sales: 75,
//       earnings: 3000.0,
//       badgeClass: 'vuejs'
//     },
//     {
//       id: 7,
//       name: 'Elite Admin',
//       license: 'Single Use',
//       agent: 'John Doe',
//       technology: 'Angular',
//       tickets: 50,
//       sales: 100,
//       earnings: 5000.0,
//       badgeClass: 'angular'
//     },
//     {
//       id: 8,
//       name: 'Ample Admin',
//       license: 'Multi-Use',
//       agent: 'Alice Brown',
//       technology: 'React',
//       tickets: 20,
//       sales: 60,
//       earnings: 2500.0,
//       badgeClass: 'react'
//     },
//     {
//       id: 7,
//       name: 'Elite Admin',
//       license: 'Single Use',
//       agent: 'John Doe',
//       technology: 'Angular',
//       tickets: 50,
//       sales: 100,
//       earnings: 5000.0,
//       badgeClass: 'angular'
//     },
  
//   ];

//   // Dropdown options for filtering
//   statusOptions = [
//     { label: 'All', value: null },
//     { label: 'Single Use', value: 'Single Use' },
//     { label: 'Multi-Use', value: 'Multi-Use' }
//   ];

//   technologyOptions = [
//     { label: 'All', value: null },
//     { label: 'Angular', value: 'Angular' },
//     { label: 'Vue.js', value: 'Vue.js' },
//     { label: 'Bootstrap', value: 'Bootstrap' },
//     { label: 'React', value: 'React' }
//   ];

//   entriesOptions = [
//     { label: '5', value: 5 },
//     { label: '10', value: 10 },
//     { label: '20', value: 20 },
//     { label: '50', value: 50 }
//   ];
  

//   // Default selections for dropdowns and filters
//   selectedStatus: any = null;
//   selectedTechnology: any = null;
//   selectedEntries: number = 10; // Default to show 10 entries
//   searchName: string = '';
  

//   // Getters for summary stats
//   getTotalProducts(): number {
//     return this.products.length;
//   }

//   getSingleUseProducts(): number {
//     return this.products.filter(product => product.license === 'Single Use').length;
//   }

//   getMultiUseProducts(): number {
//     return this.products.filter(product => product.license === 'Multi-Use').length;
//   }

//   // Perform an action on a product (e.g., edit, delete)
//   performAction(product: Product) {
//     console.log(`Action performed on Product ID: ${product.id}`);
//     this.router.navigate(['manage-users']);
//   }

//   // Export products to Excel
//   exportToExcel() {
//     console.log('Export to Excel button clicked');
//     // Placeholder: Add logic to export the data
//   }

//   // Refresh the product list
//   refreshList() {
//     console.log('Refresh List button clicked');
//     // Placeholder: Add logic to refresh data (e.g., re-fetch from API)
//   }

//   // Navigate to another page
//   navigateToManageUsers() {
//     this.router.navigate(['manage-users']);
//   }

//   // Logout functionality
//   logout() {
//     console.log('User logged out');
//     sessionStorage.clear();
//     this.router.navigate(['login']);
//   }

//   constructor(private router: Router) {}
// }
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Product {
  id: number;
  name: string;
  license: string;
  agent: string;
  technology: string;
  tickets: number;
  sales: number;
  earnings: number;
  badgeClass: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Elite Admin',
      license: 'Single Use',
      agent: 'John Doe',
      technology: 'Angular',
      tickets: 50,
      sales: 100,
      earnings: 5000.0,
      badgeClass: 'angular'
    },
    {
      id: 2,
      name: 'Monster Admin',
      license: 'Single Use',
      agent: 'Jane Smith',
      technology: 'Vue.js',
      tickets: 30,
      sales: 75,
      earnings: 3000.0,
      badgeClass: 'vuejs'
    },
    {
      id: 3,
      name: 'Material Pro Admin',
      license: 'Single Use',
      agent: 'Bob Johnson',
      technology: 'Bootstrap',
      tickets: 40,
      sales: 90,
      earnings: 4000.0,
      badgeClass: 'bootstrap'
    },
    {
      id: 4,
      name: 'Ample Admin',
      license: 'Multi-Use',
      agent: 'Alice Brown',
      technology: 'React',
      tickets: 20,
      sales: 60,
      earnings: 2500.0,
      badgeClass: 'react'
    },
    {
      id: 3,
      name: 'Material Pro Admin',
      license: 'Single Use',
      agent: 'Bob Johnson',
      technology: 'Bootstrap',
      tickets: 40,
      sales: 90,
      earnings: 4000.0,
      badgeClass: 'bootstrap'
    },
    {
      id: 6,
      name: 'Monster Admin',
      license: 'Single Use',
      agent: 'Jane Smith',
      technology: 'Vue.js',
      tickets: 30,
      sales: 75,
      earnings: 3000.0,
      badgeClass: 'vuejs'
    },
    {
      id: 7,
      name: 'Elite Admin',
      license: 'Single Use',
      agent: 'John Doe',
      technology: 'Angular',
      tickets: 50,
      sales: 100,
      earnings: 5000.0,
      badgeClass: 'angular'
    },
    {
      id: 8,
      name: 'Ample Admin',
      license: 'Multi-Use',
      agent: 'Alice Brown',
      technology: 'React',
      tickets: 20,
      sales: 60,
      earnings: 2500.0,
      badgeClass: 'react'
    },
    {
      id: 7,
      name: 'Elite Admin',
      license: 'Single Use',
      agent: 'John Doe',
      technology: 'Angular',
      tickets: 50,
      sales: 100,
      earnings: 5000.0,
      badgeClass: 'angular'
    },
  ];

  // Dropdown options for filtering
  statusOptions = [
    { label: 'All', value: null },
    { label: 'Single Use', value: 'Single Use' },
    { label: 'Multi-Use', value: 'Multi-Use' }
  ];

  technologyOptions = [
    { label: 'All', value: null },
    { label: 'Angular', value: 'Angular' },
    { label: 'Vue.js', value: 'Vue.js' },
    { label: 'Bootstrap', value: 'Bootstrap' },
    { label: 'React', value: 'React' }
  ];

  entriesOptions = [
    { label: '5', value: 5 },
    { label: '10', value: 10 },
    { label: '20', value: 20 },
    { label: '50', value: 50 }
  ];

  // Default selections for dropdowns and filters
  selectedStatus: any = null;
  selectedTechnology: any = null;
  selectedEntries: number = 10; // Default to show 10 entries
  searchName: string = '';

  // Getters for summary stats
  getTotalProducts(): number {
    return this.products.length;
  }

  getSingleUseProducts(): number {
    return this.products.filter(product => product.license === 'Single Use').length;
  }

  getMultiUseProducts(): number {
    return this.products.filter(product => product.license === 'Multi-Use').length;
  }

  // Perform an action on a product (e.g., edit, delete)
  performAction(product: Product) {
    console.log(`Action performed on Product ID: ${product.id}`);
    this.router.navigate(['manage-users']);
  }

  // Export products to Excel
  exportToExcel() {
    console.log('Export to Excel button clicked');
    // Placeholder: Add logic to export the data
  }

  // Refresh the product list
  refreshList() {
    console.log('Refresh List button clicked');
    // Placeholder: Add logic to refresh data (e.g., re-fetch from API)
  }

  // Navigate to another page
  navigateToManageUsers() {
    this.router.navigate(['manage-users']);
  }

  // Logout functionality with additional logging and navigation handling
  logout() {
    console.log('User logged out');
    sessionStorage.clear();  // Clears session storage
    this.router.navigate(['login']).then(() => {
      console.log('Navigation to login successful');
    }).catch(err => {
      console.error('Navigation to login failed', err);
    });
  }

  constructor(private router: Router) {}
}
