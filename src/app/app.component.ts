import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListUserComponent } from '../user/list-user/list-user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CrudUsuariosPrueba';
}
