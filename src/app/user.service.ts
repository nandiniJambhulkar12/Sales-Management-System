// // src/app/user.service.ts
// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// interface User {
//   id: number;
//   name: string;
//   email: string;
//   role: string;
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {
//   private usersSubject = new BehaviorSubject<User[]>([
//     { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin' },
//     { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'User' },
//     { id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com', role: 'User' },
//   ]);
  
//   private nextId: number = 4;

//   constructor() { }

//   // Get current users as an observable
//   getUsers() {
//     return this.usersSubject.asObservable();
//   }

//   // Add a new user
//   addUser(user: User) {
//     user.id = this.nextId++;
//     const updatedUsers = [...this.usersSubject.value, user];
//     this.usersSubject.next(updatedUsers);
//   }

//   // Delete a user
//   deleteUser(userId: number) {
//     const updatedUsers = this.usersSubject.value.filter(user => user.id !== userId);
//     this.usersSubject.next(updatedUsers);
//   }

//   // Update a user's information
//   updateUser(updatedUser: User) {
//     const updatedUsers = this.usersSubject.value.map(user =>
//       user.id === updatedUser.id ? updatedUser : user
//     );
//     this.usersSubject.next(updatedUsers);
//   }
// }


import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersSubject = new BehaviorSubject<User[]>([
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'User' },
    { id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com', role: 'User' },
  ]);
  
  private nextId: number = 4;

  constructor() { }

  getUsers(): Observable<User[]> {
    return this.usersSubject.asObservable();
  }


  addUser(user: User): Observable<void> {
    return new Observable((observer) => {
      user.id = this.nextId++;
      const updatedUsers = [...this.usersSubject.value, user];
      this.usersSubject.next(updatedUsers);
      observer.next();
      observer.complete();
    });
  }

  // Delete a user
  deleteUser(userId: number) {
    const updatedUsers = this.usersSubject.value.filter(user => user.id !== userId);
    this.usersSubject.next(updatedUsers);
  }

  // Update a user's information
  updateUser(updatedUser: User) {
    const updatedUsers = this.usersSubject.value.map(user =>
      user.id === updatedUser.id ? updatedUser : user
    );
    this.usersSubject.next(updatedUsers);
  }
}
