import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormGroup, FormControl,Validators,FormBuilder } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-add-user',
    standalone: true,
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.css'],
    imports: [ReactiveFormsModule,HttpClientModule]
})
export class AddUserComponent {
    userForm: FormGroup;

    constructor(private fb: FormBuilder, private http: HttpClient) {
        this.userForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            location: ['', Validators.required],
            role: ['', Validators.required],
        });
    }

    onSubmit() {
        if (this.userForm.valid) {
            this.http.post('http://localhost:8081/api/users', this.userForm.value)
                .subscribe(() => {
                    alert('User added successfully!');
                    this.userForm.reset();
                });
        }
    }
}
