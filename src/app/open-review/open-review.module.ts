import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpenReviewPageRoutingModule } from './open-review-routing.module';

import { OpenReviewPage } from './open-review.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpenReviewPageRoutingModule
  ],
  declarations: [OpenReviewPage]
})
export class OpenReviewPageModule {}
