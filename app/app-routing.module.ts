import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  {HomeComponent} from '@app/home/home.component';
import { CardDetailsComponent } from '@app/card-details/card-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'card-details', component: CardDetailsComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
