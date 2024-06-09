import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CutomerReviewsComponent } from './cutomer-reviews.component';
const routes: Routes = [
  {
    path: '',
    component: CutomerReviewsComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CutomerReviewsRoutingModule {}
