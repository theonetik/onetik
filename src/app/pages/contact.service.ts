import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })
export class ContactService {
  constructor(private firestore: Firestore) {}

  addMessage(data: { name: string; email: string; subject: string; message: string }) {
    const contactCollection = collection(this.firestore, 'contactMessages');
    return addDoc(contactCollection, data);
  }
}