import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-slide',
  templateUrl: './app-slide.component.html',
  styleUrls: ['./app-slide.component.css'],
})
export class AppSlideComponent implements OnInit {
  @Input() slides: any;
  constructor() {}
  currentSlide = 0;

  next() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }
  previous() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }
  ngOnInit(): void {
    console.log(this.slides);
  }
}
