import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ApiService } from './app/service/api.service';


bootstrapApplication(AppComponent, appConfig)
  .then(appRef => {
    const userInitService = appRef.injector.get(ApiService);
    userInitService.initializeUsers();
  })
  .catch(err => console.error(err));
