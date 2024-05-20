import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {User} from "../../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  initializeUsers(): void {
       
    if (!this.init()) {
      
    if (this.isLocalStorageAvailable()) {
      localStorage.removeItem('users');
    }
    this.http.get<User[]>('assets/users.json').subscribe(data => {
      if (this.isLocalStorageAvailable()) {
        localStorage.setItem('users', JSON.stringify(data));
      }
    });

    const inicio = 'inicio';
    localStorage.setItem(inicio, inicio);
  }

  }
  
  init(): boolean {
    try {
      const inicio = localStorage.getItem('inicio');
      if (inicio) {
        return true;
      }else{
        return false;
      }
    } catch (e) {
      return false;
    }
  }

   isLocalStorageAvailable(): boolean {
    try {
      const test = 'test';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }

}
