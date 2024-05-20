import { Component, Input } from '@angular/core';
import { User } from '../../model/user.model';
import { ApiService } from '../../app/service/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-details',
  standalone: true,
  imports: [],
  templateUrl: './view-details.component.html',
  styleUrl: './view-details.component.scss'
})
export class ViewDetailsComponent {
  user: User = this.initializeUser(); // Inicializa el usuario con valores predeterminados

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

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
