import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../sistema/session.service';
import { Router } from '@angular/router';
import { provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
  standalone: true,
  imports: [CommonModule,FormsModule, ReactiveFormsModule, ],
  providers: [AuthService, SessionService, Router,  provideNgxMask(),]
})
export class AuthComponent implements OnInit {

    form!: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private sessionService: SessionService,
        private router: Router,
        private toastr: ToastrService,
    ){}

    ngOnInit(){
        this.form = this.formBuilder.group({
            'cpf': ['', Validators.compose([
                Validators.required,
                Validators.minLength(11),
                Validators.maxLength(11)
            ])],
            'password': ['', Validators.compose([
                Validators.required,
                Validators.minLength(6),
            ])],
            'lembrarme': ['']
        });

        
    }

    async entrar(){
       //console.log(this.form.value)
       if(this.form.value.lembrarme){
            localStorage.setItem('usuario', this.form.value.cpf);
        }

        this.authService.entrar(this.form.value).subscribe({
            next: (data:any) => {
                this.sessionService.setSession(data.user, data.access_token);
                this.router.navigate(['']);
                
            },
            error: (error) => {
                this.toastr.error('Usuário ou senha incorreto!');
            }
        });
    }
}
