import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private itemDoc: AngularFirestoreCollection<any>;
  data_reciever: any;
  constructor(
    private db: AngularFirestore,
    public router: Router
  ) {

  }
  ngOnInit() {
    this.db
      .collection("user_review_data")
      .get()
      .subscribe(async docs_data => {
        this.data_reciever = await docs_data.docs.map(item => {
          return { data_id: item.id, data: item.data() };
        }
        );
        console.log("docs_data======>", this.data_reciever);
      });
  }

  previewReview(item_data: any) {
    let navigationExtras: NavigationExtras = {
      state: {
        review_details: item_data,
      }
    }
    this.router.navigate(['/open-review'], navigationExtras)
  }


}
