import { RouterModule, Routes } from '@angular/router';
import { NewUserComponent } from '../user/new-user/new-user.component';
import { ListUserComponent } from '../user/list-user/list-user.component';
import { EditUserComponent } from '../user/edit-user/edit-user.component';
import { HomeUserComponent } from '../user/home-user/home-user.component';
import { ViewDetailsComponent } from '../user/view-details/view-details.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeUserComponent },
    { path: 'listUser', component: ListUserComponent },
    { path: 'newuser', component: NewUserComponent },
    { path: 'editUser/:id', component: EditUserComponent },
    { path: 'viewDetails/:id', component: ViewDetailsComponent },
];

export const routing = RouterModule.forRoot(routes);
