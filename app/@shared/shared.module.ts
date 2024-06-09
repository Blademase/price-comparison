import { NgModule } from '@angular/core';
import { CardsComponent } from './cards/cards.component';
import { RewievCardsComponent } from './rewiev-cards/rewiev-cards.component';
import { AppSlideComponent } from './app-slide/app-slide.component';

@NgModule({
  imports: [],
  declarations: [CardsComponent, RewievCardsComponent, AppSlideComponent],
  exports: [CardsComponent, RewievCardsComponent, AppSlideComponent],
})
export class SharedModule {}
