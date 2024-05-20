import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../app/service/api.service';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.scss'
})
export class EditUserComponent implements OnInit {
  user: User = this.initializeUser(); // Inicializa el usuario con valores predeterminados

  constructor(private route: ActivatedRoute, private router: Router, private apiService: ApiService) {}

  ngOnInit(): void {
    if (this.apiService.isLocalStorageAvailable()) {
      const userId = Number(this.route.snapshot.paramMap.get('id'));
      const storedUsers = localStorage.getItem('users');
      if (storedUsers) {
        const users = JSON.parse(storedUsers) as User[];
        const foundUser = users.find(u => u.id === userId);
        if (foundUser) {
          this.user = foundUser;
        }
      }
    }
  }

  onSubmit(): void {
    if (this.user) {
      const storedUsers = localStorage.getItem('users');
      if (storedUsers) {
        let users = JSON.parse(storedUsers) as User[];
        users = users.map(u => u.id === this.user!.id ? this.user : u);
        localStorage.setItem('users', JSON.stringify(users));
        this.router.navigate(['/listUser']); 
      }
    }
  }

  private initializeUser(): User {
    return {
      id: 0,
      username: '',
      firstSurname: '',
      secondSurname: '',
      nif: '',
      gender: '',
      adrress: '',
      number: '',
      door: '',
      postalCode: '',
      city: '',
      nameSchool: '',
      studies: '',
      dateStudies: ''
    };
  }
  
}
