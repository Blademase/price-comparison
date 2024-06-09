import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@app/material.module';
import { ContactsRoutingModule } from './contcats-routing.module';
import { ContactsComponent } from './contacts.component';

@NgModule({
  imports: [CommonModule, TranslateModule, FlexLayoutModule, MaterialModule, ContactsRoutingModule],
  declarations: [ContactsComponent],
})
export class AboutModule {}
