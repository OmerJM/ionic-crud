import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

interface Item {
  name: string;
}

@Component({
  selector: 'app-root',
  template: `
  <ul>
    <li *ngFor="let item of item$ | async">
      {{ item.name }}
    </li>
  </ul>
  `
})
export class AppComponent {
  item$: Observable<Item[]>;

  constructor(private firestore: AngularFirestore) {
    const itemCollection = this.firestore.collection<Item>('items');
    this.item$ = itemCollection.valueChanges();
  }
}
