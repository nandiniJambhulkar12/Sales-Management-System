import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';  // Import Router

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  // Inject the Router into the constructor
  constructor(private router: Router) {}

  // This is the submit function for the form
  onSubmit(form: NgForm) {
    if (form.valid) {
      const email = form.value['email'];
      console.log('Reset link sent to:', email);
      alert(`A password reset link has been sent to ${email}.`);
      // Call the service to send the reset email here
    }
  }

  // Method to navigate to the login page
  goBack(): void {
    this.router.navigate(['/login']);  // Replace '/login' with your login page route
  }
}
