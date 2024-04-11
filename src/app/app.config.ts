import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideEnvironmentNgxMask } from 'ngx-mask';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(), 
    provideHttpClient(withFetch()), 
    provideEnvironmentNgxMask(),
    provideAnimations(), // required animations providers
    provideToastr({timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,}), // Toastr providers
  ]
};
