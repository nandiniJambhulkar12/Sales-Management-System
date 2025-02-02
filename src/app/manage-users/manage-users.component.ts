// src/app/manage-users/manage-users.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {
  users: User[] = [];
  newUser: User = { id: 0, name: '', email: '', role: 'User' };
  showAddUserForm: boolean = false; 

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    // Fetch users from UserService
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  openAddUserForm() {
    this.showAddUserForm = true;
  }

  cancelAddUser() {
    this.showAddUserForm = false;
    this.newUser = { id: 0, name: '', email: '', role: 'User' }; 
  }

  addUser() {
    if (this.newUser.name && this.newUser.email && this.newUser.role) {
      this.userService.addUser(this.newUser);  // Save the user via the service
      alert('User added successfully!');
      this.cancelAddUser();
    } else {
      alert('All fields are required to add a user.');
    }
  }

  editUser(user: User) {
    const name = prompt('Edit user name:', user.name);
    const email = prompt('Edit user email:', user.email);
    const role = prompt('Edit user role:', user.role);

    if (name && email && role) {
      const updatedUser: User = { ...user, name, email, role };
      this.userService.updateUser(updatedUser);  // Update the user via the service
      alert('User updated successfully!');
    } else {
      alert('All fields are required to edit a user.');
    }
  }

  viewUser(user: User) {
    alert(`Viewing details for user: ${user.name}`);
  }

  deleteUser(user: User) {
    const confirmDelete = confirm(`Are you sure you want to delete user ${user.name}?`);
    if (confirmDelete) {
      this.userService.deleteUser(user.id);  // Delete the user via the service
      alert('User deleted successfully!');
    }
  }

  navigateToAddUserPage() {
    this.router.navigate(['/add-user']);
  }
  

  logout() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
}
