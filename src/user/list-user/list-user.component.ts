import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgFor, NgIf } from '@angular/common';
import { ApiService } from '../../app/service/api.service';

@Component({
  selector: 'app-list-user',
  standalone: true,
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.scss',
  imports: [NgFor, NgIf]
})
export class ListUserComponent implements OnInit {

  users: User[] = [];

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit(): void {    
    this.loadUsers();
  }

  loadUsers(): void {
    if (this.apiService.isLocalStorageAvailable()) {
      const savedUsers = localStorage.getItem('users');
      if (savedUsers) {
        this.users = JSON.parse(savedUsers);
      }
    }
  }

  editUser(id: number): void {
    this.router.navigate(['/editUser', id]);
  }

  deleteUser(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  viewDetails(id: number): void {
    this.router.navigate(['/viewDetails', id]);
  }

  addUser(): void {
    this.router.navigate(['newuser']);
  };

}
