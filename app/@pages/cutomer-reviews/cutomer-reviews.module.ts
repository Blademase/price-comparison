import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CutomerReviewsComponent } from './cutomer-reviews.component';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@app/material.module';
import { SharedModule } from '@app/@shared';
import { CutomerReviewsRoutingModule } from './cutomer-reviews-routing.module';

@NgModule({
  declarations: [CutomerReviewsComponent],
  imports: [CommonModule, TranslateModule, SharedModule, FlexLayoutModule, MaterialModule, CutomerReviewsRoutingModule],
})
export class CutomerReviewsModule {}
