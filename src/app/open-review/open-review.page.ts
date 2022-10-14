import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-open-review',
  templateUrl: './open-review.page.html',
  styleUrls: ['./open-review.page.scss'],
})
export class OpenReviewPage implements OnInit {
  reviewDetails: any;
  constructor(
    public router: Router,
    public route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.reviewDetails = this.router.getCurrentNavigation().extras.state.review_details;
        console.log("review data=====>", this.reviewDetails);
      }
    });
  }

}
