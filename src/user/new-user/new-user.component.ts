import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.scss'
})
export class NewUserComponent implements OnInit{

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  addForm!: FormGroup;

  user: User = {
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
  
  ngOnInit() {
    if (this.isValid()) {
      this.addForm = this.formBuilder.group({
        id: [],
        username: ['', Validators.required],
        password: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        age: ['', Validators.required],
        salary: ['', Validators.required]
      });
    }
  }
  
  isValid(): boolean {    
    return !!this.user.username.trim(); 
  }

  addUser(): void {
    let users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    console.log('Existing users:', users);
    this.user.id = users.length ? Math.max(...users.map((u: User) => u.id)) + 1 : 1;
    console.log('New user ID:', this.user.id);
    users.push(this.user);
    localStorage.setItem('users', JSON.stringify(users));  
    this.router.navigate(['/listUser']);
  }
}
