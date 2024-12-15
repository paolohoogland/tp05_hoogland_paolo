import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store'; 
import { importProvidersFrom } from '@angular/core'; 
import { ProduitsState } from './app/store/produits/produits.state'; 
import { PanierState } from './app/store/panier/panier.state'; 

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    importProvidersFrom(NgxsModule.forRoot([ProduitsState, PanierState]))
  ]
});
