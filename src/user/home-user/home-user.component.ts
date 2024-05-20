import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../app/service/api.service';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-home-user',
  standalone: true,
  imports: [],
  templateUrl: './home-user.component.html',
  styleUrl: './home-user.component.scss'
})
export class HomeUserComponent implements OnInit {
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

  listUser(): void {
    this.router.navigate(['listUser']);
  };
}
