import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  onSubmit(form: NgForm) {
    if (form.valid) {
      const newPassword = form.value['newPassword'];
      const confirmPassword = form.value['confirmPassword'];

      if (newPassword === confirmPassword) {
        console.log('Password reset to:', newPassword);
        alert('Your password has been reset successfully!');
        // Call the service to update the password here
      } else {
        alert('Passwords do not match!');
      }
    }
  }
}