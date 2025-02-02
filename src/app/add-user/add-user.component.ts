// // src/app/add-user/add-user.component.ts
// import { Component } from '@angular/core';
// import { UserService } from '../user.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-add-user',
//   templateUrl: './add-user.component.html',
//   styleUrls: ['./add-user.component.css']
// })
// export class AddUserComponent {
//   newUser = { id: 0, name: '', email: '', role: 'User' };

//   constructor(private userService: UserService, private router: Router) {}

//   addUser(): void {
//     if (this.newUser.name && this.newUser.email && this.newUser.role) {
//       // Add the user using the service and subscribe to wait for completion
//       this.userService.addUser(this.newUser).subscribe(() => {
//         // Alert that the user was successfully added
//         alert('User added successfully!');

//         // Automatically navigate to ManageUsersComponent
//         this.router.navigate(['/manage-user']);
//       }, (error) => {
//         // Handle error if any
//         console.error('Error adding user:', error);
//       });
//     } else {
//       alert('All fields are required to add a user.');
//     }
    
    
//   }
// }
// src/app/add-user/add-user.component.ts
import { Component } from '@angular/core';
import { UserService } from '../user.service'; // Assuming you have UserService for managing users
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  
  newUser = {
    id: 0,
    name: '',
    email: '',
    role: 'User'
  };

  constructor(private userService: UserService, private router: Router) {}

  addUser(): void {
    // Check if all fields are filled
    if (this.newUser.name && this.newUser.email && this.newUser.role) {
      
      // Call the service to add the user
      this.userService.addUser(this.newUser).subscribe(
        () => {
          // Alert success and navigate to manage users
          alert('User added successfully!');
          this.router.navigate(['/manage-users']); // Navigates to the manage users page
        },
        (error) => {
          // Handle any errors during the user creation process
          console.error('Error adding user:', error);
          alert('Failed to add user. Please try again later.');
        }
      );
      
    } else {
      // If fields are missing, show an alert
      alert('All fields are required to add a user.');
    }
  }
}
