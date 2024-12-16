import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PanierState } from '../../store/panier/panier.state';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [CommonModule]  
})
export class HeaderComponent implements OnInit {
  nbProduits$!: Observable<number>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.nbProduits$ = this.store.select(PanierState.getNbProduits);
  }
}
