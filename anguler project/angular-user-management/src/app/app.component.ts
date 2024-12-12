import { Component } from '@angular/core';
import { AddUserComponent } from './add-user/add-user.component';
import { UserListComponent } from './user-list/user-list.component';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   imports: [AddUserComponent, UserListComponent],
  
})
export class AppComponent {}
