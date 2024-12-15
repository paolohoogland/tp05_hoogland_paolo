import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideNgxs } from '@ngxs/store';
import { ProductsState } from './app/store/products/products.state';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideNgxs([ProductsState])
  ]
});
