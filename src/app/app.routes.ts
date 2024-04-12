import { Injectable } from '@angular/core';
import { Router, Routes, mapToCanActivate } from '@angular/router';
import { StorageService } from './sistema/storage.service';

@Injectable({ providedIn: 'root' })
export class AdminGuard {
  constructor(
    private storageService: StorageService,
    private router: Router
) {}
 async canActivate() {
    if (this.storageService.getItem('token')) {
      return true;
    } else {
        //this.router.navigate(['auth']);
      return false;
    }
    
  }
}

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () =>
      import('./auth/auth.component').then((c) => c.AuthComponent),
  },
  {
    path: '',
    loadComponent: () =>
      import('./sistema/sistema.component').then((c) => c.SistemaComponent),
    canActivate: mapToCanActivate([AdminGuard]),
    children: [
      {
        path: 'Inicio',
        loadComponent: () =>
          import('./sistema/views/home/home.component').then((c) => c.HomeComponent),
      },
      {
        path: 'Usuarios',
        loadComponent: () =>
          import('./sistema/views/users/users.component').then((c) => c.UsersComponent),
      },
    ],
  },
  {
    path:'**',
    loadComponent: () =>
      import('./auth/auth.component').then((c) => c.AuthComponent),
  }
 
];
