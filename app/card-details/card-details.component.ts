import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {
  selectedCard: any; // Предполагается, что selectedCard инициализируется данными из локального хранилища

  constructor() { }

  ngOnInit(): void {
    // Пример инициализации selectedCard из локального хранилища
    const storedCard = localStorage.getItem('selectedCard');
    if (storedCard) {
      this.selectedCard = JSON.parse(storedCard);
    }
  }

  updateRating(rating: number) {
    // Обновление рейтинга в selectedCard
    this.selectedCard.rating = rating;

    // Обновление данных в локальном хранилище
    localStorage.setItem('selectedCard', JSON.stringify(this.selectedCard));
  }
}
