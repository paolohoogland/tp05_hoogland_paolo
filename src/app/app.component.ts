import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { ListeProduitsComponent } from './components/liste-produits/liste-produits.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [HeaderComponent, ListeProduitsComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tp05_hoogland_paolo';
}
