import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  userDetails = {
    name: '',
    license: '',
    agent: '',
    technology: '',
    tickets: 0,
    sales: 0,
    earnings: 0
  };

  constructor(private router: Router) {}

  saveUserDetails() {
    // Save user details to local storage or a service
    this.router.navigate(['/dashboard'], { state: { userDetails: this.userDetails } });

    // Redirect to dashboard
    this.router.navigate(['/dashboard']);
  }
}
