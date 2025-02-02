import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Makes the service available app-wide without needing to add it to providers
})
export class UserDataService {
  private userDetails: any = null;

  setUserDetails(details: any) {
    this.userDetails = details;
  }

  getUserDetails() {
    return this.userDetails;
  }

  clearUserDetails() {
    this.userDetails = null;
  }
}
