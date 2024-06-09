import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  condition: boolean = true;
  changeCondition() {
    this.condition = !this.condition; // Пример изменения значения condition
    console.log('Значение condition:', this.condition); // Добавляем console.log
  }
  constructor() {}
  ngOnInit(): void {}
  @Input() imageUrl!: string;
  @Input() title!: string;
  @Input() price!: number;
  @Input() discount!: string;
}
