import { Injectable } from '@angular/core';
import {Auth, authState, signInWithEmailAndPassword, signOut, User, UserCredential} from '@angular/fire/auth';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: Observable<User | null>
  constructor(private auth: Auth) {
    this.currentUser = authState(this.auth);
  }

  login(email: string, password: string): Promise<UserCredential> {
    window.location.href = "/home"
    localStorage.setItem('isLoggedIn', 'true');
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout(): Promise<void> {
    localStorage.setItem('isLoggedIn', 'false');
    return signOut(this.auth).then(() => {
      console.log("Sikeres kijelentkezés")
      window.location.href = "/home";
    })
  }
  
  loggedIn(): string | null {
    return localStorage.getItem("isLoggedIn");
  }
}
