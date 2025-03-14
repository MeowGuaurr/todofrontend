/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';  // Import the necessary modules

// Include HttpClientModule in the providers array
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),  // This will set up HttpClient globally
  ]
})
  .catch((err) => console.error(err));
