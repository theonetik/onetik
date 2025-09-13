import { inject, Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  User as FirebaseUser,
  UserCredential
} from '@angular/fire/auth';
import { doc, getDoc, setDoc, Firestore } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private auth: Auth = inject(Auth);
  private firestore: Firestore = inject(Firestore);

  /** 🔹 Email & Password Login */
  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  /** 🔹 Signup → Default role = user */
  async signup(email: string, password: string): Promise<UserCredential> {
    const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
    const user = userCredential.user;

    await setDoc(doc(this.firestore, `users/${user.uid}`), {
      uid: user.uid,
      email: user.email,
      role: 'user' // default role
    });

    localStorage.setItem('role', 'user');
    return userCredential;
  }

  /** 🔹 Forgot Password */
  forgotPassword(email: string) {
    return sendPasswordResetEmail(this.auth, email);
  }

  /** 🔹 Google Sign-In */
  async googleSignIn(): Promise<UserCredential> {
    const credential = await signInWithPopup(this.auth, new GoogleAuthProvider());
    const user = credential.user;

    const userDoc = doc(this.firestore, `users/${user.uid}`);
    const userSnapshot = await getDoc(userDoc);

    if (!userSnapshot.exists()) {
      await setDoc(userDoc, {
        uid: user.uid,
        email: user.email,
        role: 'user'
      });
      localStorage.setItem('role', 'user');
    } else {
      const role = (userSnapshot.data()['role'] as 'superuser' | 'user') || 'user';
      localStorage.setItem('role', role);
    }

    return credential;
  }

  /** 🔹 Logout */
  async logout() {
    localStorage.removeItem('role');
    return this.auth.signOut();
  }

  /** 🔹 Check if user is logged in */
  isLoggedIn(): boolean {
    return this.auth.currentUser != null;
  }

  
  /** 🔹 Get Current Firebase User */
  getCurrentUser(): Promise<FirebaseUser | null> {
    return new Promise((resolve) => {
      onAuthStateChanged(this.auth, (user) => resolve(user));
    });
  }

  /** 🔹 Get Current User Role */
  async getCurrentUserRole(): Promise<'superuser' | 'user' | null> {
    const cachedRole = localStorage.getItem('role') as 'superuser' | 'user' | null;
    if (cachedRole) return cachedRole;

    const user = await this.getCurrentUser();
    if (!user) return null;

    const userDoc = await getDoc(doc(this.firestore, `users/${user.uid}`));
    if (userDoc.exists()) {
      const role = userDoc.data()['role'] as 'superuser' | 'user';
      localStorage.setItem('role', role);
      return role;
    }
    return null;
  }
}
