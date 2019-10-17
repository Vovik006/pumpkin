import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "angularfire2/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { ContactUs } from "../_models/ContactUs";

@Injectable({
  providedIn: "root"
})
export class MessageService {
  messagesCollection: AngularFirestoreCollection<ContactUs>;
  messageDoc: AngularFirestoreDocument<ContactUs>;
  messages: Observable<ContactUs[]>;
  message: Observable<ContactUs>;

  constructor(private afs: AngularFirestore) {
    this.messagesCollection = this.afs.collection<ContactUs>("Messages");
  }

  newMessage(message: ContactUs) {
    this.messagesCollection.add(message);
  }

  getMessages():Observable<ContactUs[]> {
    this.messages = this.messagesCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as ContactUs;
          data.id = action.payload.doc.id;
          return data;
        });
      })
    );
    return this.messages;
  }
}
