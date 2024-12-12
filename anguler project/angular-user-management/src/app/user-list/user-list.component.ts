import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface User {
    id: number;
    name: string;
    email: string;
    location: string;
    role: string;
}

@Component({
    selector: 'app-user-list',
    standalone: true,
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css'],
    imports: [CommonModule,FormsModule] ,
})
export class UserListComponent implements OnInit {
    users: User[] = [];
    editingUser: User | null = null;

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.fetchUsers();
    }

    fetchUsers() {
        this.http.get<User[]>('http://localhost:8081/api/users').subscribe((data) => {
            this.users = data;
        });
    }

    deleteUser(id: number) {
        if (confirm('Are you sure you want to delete this user?')) {
            this.http.delete(`http://localhost:8081/api/users/${id}`).subscribe(() => {
                alert('User deleted successfully!');
                this.fetchUsers();
            });
        }
    }

    editUser(user: User) {
        this.editingUser = { ...user };
    }

    updateUser() {
        if (this.editingUser) {
            this.http.put(`http://localhost:8081/api/users/${this.editingUser.id}`, this.editingUser)
                .subscribe(() => {
                    alert('User updated successfully!');
                    this.editingUser = null;
                    this.fetchUsers();
                });
        }
    }
}
