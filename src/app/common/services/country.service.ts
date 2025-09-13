import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  CollectionReference,
  DocumentData
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  constructor(private firestore: Firestore) {}

  // 🔹 Add card to path: cards/{moduleType}/{countryCode}/
  addCard(cardData: { title: string; description: string; countryCode: string }, moduleType: string) {
    const cardsRef = collection(this.firestore, `cards/${moduleType}/${cardData.countryCode}`);
    return addDoc(cardsRef, cardData);
  }

  // 🔹 Get cards from cards/{moduleType}/{countryCode}
  async getCardsByCountryAndModule(countryCode: string, moduleType: string) {
    const cardsRef = collection(this.firestore, `cards/${moduleType}/${countryCode}`);
    return await getDocs(cardsRef);  // returns QuerySnapshot
  }

  // 🔹 Update card at cards/{moduleType}/{countryCode}/{cardId}
  updateCard(cardId: string, countryCode: string, moduleType: string, data: Partial<{ title: string; description: string }>) {
    const cardRef = doc(this.firestore, `cards/${moduleType}/${countryCode}/${cardId}`);
    return updateDoc(cardRef, data);
  }

  // 🔹 Delete card from cards/{moduleType}/{countryCode}/{cardId}
  deleteCardByModule(cardId: string, countryCode: string, moduleType: string) {
    const cardRef = doc(this.firestore, `cards/${moduleType}/${countryCode}/${cardId}`);
    return deleteDoc(cardRef);
  }
}
