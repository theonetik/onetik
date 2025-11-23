import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  query,
  where,
  addDoc,
  updateDoc,
  deleteDoc,
  doc
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { SkillCard } from '../interface/skill-card';

@Injectable({
  providedIn: 'root'
})
export class SkillverseService {

  private collectionName = 'skillverse-cards';

  constructor(private firestore: Firestore) {}

  // Get cards by subcategory item
  getCardsBySubItem(subItem: string): Observable<SkillCard[]> {
    const ref = collection(this.firestore, this.collectionName);
    const q = query(ref, where('subItem', '==', subItem)); // <-- changed 'type' to 'subItem'
    return collectionData(q, { idField: 'id' }) as Observable<SkillCard[]>;
  }

  // Add card
  addCard(card: SkillCard) {
    const ref = collection(this.firestore, this.collectionName);
    return addDoc(ref, {
      ...card,
      createdAt: new Date()
    });
  }

  // Update card
  updateCard(id: string, card: SkillCard) {
    const ref = doc(this.firestore, `${this.collectionName}/${id}`);
    return updateDoc(ref, {
      ...card,
      updatedAt: new Date()
    });
  }

  // Delete card
  deleteCard(id: string) {
    const ref = doc(this.firestore, `${this.collectionName}/${id}`);
    return deleteDoc(ref);
  }
}
