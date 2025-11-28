import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  deleteDoc,
  doc,
  updateDoc
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AIPrompt } from '../interface/aiprompt';

@Injectable({
  providedIn: 'root'
})
export class AIPromptService {

  constructor(private firestore: Firestore) {}

  getPrompts(): Observable<AIPrompt[]> {
    const ref = collection(this.firestore, 'aiprompts');
    return collectionData(ref, { idField: 'id' }) as Observable<AIPrompt[]>;
  }

  addPrompt(prompt: AIPrompt) {
    const ref = collection(this.firestore, 'aiprompts');
    return addDoc(ref, prompt);
  }

  updatePrompt(id: string, prompt: Partial<AIPrompt>) {
    const docRef = doc(this.firestore, `aiprompts/${id}`);
    return updateDoc(docRef, prompt);
  }

  deletePrompt(id: string) {
    const docRef = doc(this.firestore, `aiprompts/${id}`);
    return deleteDoc(docRef);
  }
}
