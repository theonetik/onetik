import { Injectable } from '@angular/core';
import {
  collectionData,
  collection,
  deleteDoc,
  doc,
  Firestore,
  updateDoc,
  setDoc,
  query,
  where
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from 'src/app/common/interface/user';


@Injectable({
  providedIn: 'root'
})
export class SuperuserService {
  private superUsersRef;

  constructor(private firestore: Firestore) {
    this.superUsersRef = collection(this.firestore, 'users');
  }

  /** Get all Super Users */
getSuperUsers(): Observable<User[]> {
  const q = query(this.superUsersRef, where('role', '==', 'superuser'));
  return collectionData(q, { idField: 'id' }) as Observable<User[]>;
}

  /** Add new Super User with UID as document ID */
  public addSuperUser(user: User) {
    const userDoc = doc(this.firestore, `users/${user.id}`);
    const { id, ...data } = user;
    return setDoc(userDoc, data);
  }

  /** Update existing Super User */
  public updateSuperUser(user: User) {
    const userDoc = doc(this.firestore, `users/${user.id}`);
    const { id, ...data } = user;
    return updateDoc(userDoc, data);
  }

  /** Delete Super User */
  public deleteSuperUser(id: string) {
    const userDoc = doc(this.firestore, `users/${id}`);
    return deleteDoc(userDoc);
  }
}
