import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./sistema/sistema.component').then((c) => c.SistemaComponent),
        children: [
            {
                path: '',
                loadComponent: () => import('./sistema/home/home.component').then((c) => c.HomeComponent)
            }
        ]
    },
    {
        path: 'auth',
        loadComponent: () => import('./auth/auth.component').then((c) => c.AuthComponent)
    }
];
