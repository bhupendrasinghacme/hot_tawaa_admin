import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpenReviewPage } from './open-review.page';

const routes: Routes = [
  {
    path: '',
    component: OpenReviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpenReviewPageRoutingModule {}
