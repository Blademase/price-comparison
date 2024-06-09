import { Title } from '@angular/platform-browser';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  stores: string[] = ['Глобус', 'Народный', 'Сулпак', 'Азия', 'Гульжамал'];
  allStores: string[] = this.stores;
  filteredStores: string[] = this.stores;

  categories: string[] = [
    'Электротехники',
    'Продукты питания',
    'Предметы первой необходимости',
    'Красота и здоровье',
    'Спорт и фитнес',
  ];
  filteredCategories: string[] = this.categories;

  constructor() {
    this.filterCategories();
  }

  filterCategories() {
    this.filteredCategories = this.categories;
  }

  filterStores(category: string) {
    if (category === 'Электротехники') {
      this.filteredStores = this.allStores.filter((store) => store === 'Гульжамал' || store === 'Сулпак');
    } else {
      this.filteredStores = this.allStores;
    }
  }
  selectStore(store: string) {
    if (store === 'Народный') {
      this.filteredCategories = ['Продукты питания', 'Предметы первой необходимости'];
    } else {
      this.filterCategories();
    }
  }

  selectCategory(category: string) {
    this.filterStores(category);
  }

  @Input() sidenav!: MatSidenav;

  ngOnInit() {}
}
