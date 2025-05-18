import { Injectable } from '@angular/core';
import {Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User, UserCredential} from '@angular/fire/auth';
import { collection, doc, Firestore, setDoc } from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';
import { NewUser } from '../models/new-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: Observable<User | null>
  constructor(private auth: Auth, private firestore: Firestore, private router: Router) {
    this.currentUser = authState(this.auth);
  }

  async reg(email: string, password: string, userData: Partial<NewUser>): Promise<UserCredential> {
    const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);

    this.createUserData(userCredential.user.uid, {
      ...userData,
      id: userCredential.user.uid,
      email: email,
      signups: [],
    });

    return userCredential;
  }

  createUserData(userId: string, userData: Partial<NewUser>): Promise<void> {
    const userRef = doc(collection(this.firestore, 'Users'), userId);

    return setDoc(userRef, userData);
  }

  login(email: string, password: string): Promise<UserCredential> {
    localStorage.setItem('isLoggedIn', 'true');
    this.router.navigateByUrl('/home');
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout(): Promise<void> {
    localStorage.setItem('isLoggedIn', 'false');
    return signOut(this.auth).then(() => {
      console.log("Sikeres kijelentkezés")
      this.router.navigateByUrl('/home');
    })
  }

  loggedIn(): string | null {
    return localStorage.getItem("isLoggedIn");
  }
}
