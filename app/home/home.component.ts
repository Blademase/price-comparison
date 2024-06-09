import { Component, OnInit } from '@angular/core';
import { QuoteService } from './quote.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  stores: string[] = ['Глобус', 'Народный', 'Сулпак', 'Азия', 'Гульжамал'];
  categories: string[] = ['Электротехника', 'Телефон', 'Компьютер', 'Красота и здоровье', 'Спорт и фитнес'];
  items: any[] = [
    { imageUrl: '../../../assets/ngx-rocket-logo.png',description:"asdfsdfasd",rating:4.2, title: 'categoryOfItem:"Электротехника",storeOfItem:["Сулпак","Народный"]', price: '45000 сом', discount: '20',categoryOfItem:"Электротехника",storeOfItem:["Сулпак","Народный"]},
    { imageUrl: '../../../assets/ngx-rocket-logo.png',description:"asdfsdfasd",rating:4.5, title: ':"Электротехника",storeOfItem:["Азия","Народный"]', price: '20000 сом', discount: '50',categoryOfItem:"Электротехника",storeOfItem:["Азия","Народный"]},
    { imageUrl: '../../../assets/ngx-rocket-logo.png',description:"asdfsdfasd",rating:4.1, title: ':"Электротехника",storeOfItem:["Гульжамал","Азия"]', price: '60000 сом', discount: '',categoryOfItem:"Электротехника",storeOfItem:["Гульжамал","Азия"] },
    { imageUrl: '../../../assets/ngx-rocket-logo.png',description:"asdfsdfasd",rating:4.0, title: ':"Электротехника",storeOfItem:["Сулпак","Народный"]', price: '45000 сом', discount: '',categoryOfItem:"Электротехника",storeOfItem:["Сулпак","Народный"]},
    { imageUrl: '../../../assets/ngx-rocket-logo.png',description:"asdfsdfasd",rating:4.4, title: 'categoryOfItem:"Красота и здоровье",storeOfItem:["Сулпак","Гульжамал', price: '20000 сом', discount: '70',categoryOfItem:"Красота и здоровье",storeOfItem:["Сулпак","Гульжамал"] },
    { imageUrl: '../../../assets/ngx-rocket-logo.png',description:"asdfsdfasd",rating:5.0, title: 'categoryOfItem:"Красота и здоровье",storeOfItem:["Глобус","Народный"', price: '60000 сом', discount: '',categoryOfItem:"Красота и здоровье",storeOfItem:["Глобус","Народный"] },
    { imageUrl: '../../../assets/ngx-rocket-logo.png',description:"asdfsdfasd",rating:3.2, title: 'categoryOfItem:"Красота и здоровье",storeOfItem:["Сулпак","Глобус"] ', price: '45000 сом', discount: '20',categoryOfItem:"Красота и здоровье",storeOfItem:["Сулпак","Глобус"] },
    { imageUrl: '../../../assets/ngx-rocket-logo.png',description:"asdfsdfasd",rating:1.2, title: 'categoryOfItem:"Спорт и фитнес",storeOfItem:["Сулпак","Народный"]', price: '20000 сом', discount: '50',categoryOfItem:"Спорт и фитнес",storeOfItem:["Сулпак","Народный"] },
    { imageUrl: '../../../assets/ngx-rocket-logo.png',description:"asdfsdfasd",rating:2.2, title: 'categoryOfItem:"Спорт и фитнес",storeOfItem:["Сулпак","Глобус"]},', price: '60000 сом', discount: '',categoryOfItem:"Спорт и фитнес",storeOfItem:["Сулпак","Глобус"]},
    { imageUrl: '../../../assets/ngx-rocket-logo.png',description:"asdfsdfasd",rating:1.2, title: 'categoryOfItem:"Спорт и фитнес",storeOfItem:["Гульжамал","Народны', price: '45000 сом', discount: '20',categoryOfItem:"Спорт и фитнес",storeOfItem:["Гульжамал","Народный"] },
    { imageUrl: '../../../assets/ngx-rocket-logo.png',description:"asdfsdfasd",rating:2.2, title: 'categoryOfItem:"Спорт и фитнес",storeOfItem:["Азия","Народный"] }', price: '20000 сом', discount: '50',categoryOfItem:"Спорт и фитнес",storeOfItem:["Азия","Народный"] },
    { imageUrl: '../../../assets/ngx-rocket-logo.png',description:"asdfsdfasd",rating:4.5, title: 'categoryOfItem:"Спорт и фитнес",storeOfItem:["Сулпак","Азия"] },', price: '60000 сом', discount: '',categoryOfItem:"Спорт и фитнес",storeOfItem:["Сулпак","Азия"] },
    { imageUrl: '../../../assets/ngx-rocket-logo.png',description:"asdfsdfasd",rating:3.9, title: 'Ноутбук', price: '45000 сом', discount: '' },
    { imageUrl: '../../../assets/ngx-rocket-logo.png',description:"asdfsdfasd",rating:3.6, title: 'Телефон', price: '20000 сом', discount: '70' },
    { imageUrl: '../../../assets/ngx-rocket-logo.png',description:"asdfsdfasd",rating:3.3, title: 'Компьютер', price: '60000 сом', discount: '' },
  ];

  selectedCategory: string | null = null;
  selectedStore: string | null = null;
  limit: number=15;
  filteredItems: any[] = [];
  viewCardDetails(item: any) {
    localStorage.setItem('selectedCard', JSON.stringify(item));
    this.router.navigate(['/card-details']);
  }
  constructor(private quoteService: QuoteService,private router: Router) {}

  ngOnInit() {
    this.filteredItems = this.items;
  }

  filterItems() {
    let filteredByCategory = this.items;
    let filteredByStore = this.items;

    if (this.selectedCategory) {
      filteredByCategory = filteredByCategory.filter((item) => item.categoryOfItem === this.selectedCategory);
    }

    if (this.selectedStore) {
      filteredByStore = filteredByStore.filter((item) => item.storeOfItem && item.storeOfItem.includes(this.selectedStore));
    }

    this.filteredItems = filteredByCategory.filter((item) => filteredByStore.includes(item));
  }
  selectCategory(category: string) {
    this.selectedCategory = category;
    this.filterItems();
  }

  selectStore(store: string) {
    this.selectedStore = store;
    this.filterItems();
  }
}
