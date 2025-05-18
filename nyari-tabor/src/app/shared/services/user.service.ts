import { Injectable } from '@angular/core';
import { NewUser } from '../models/new-user';
import { from, map, Observable, of, switchMap, tap } from 'rxjs';
import { doc, Firestore, getDoc } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { SignUp } from '../models/sign-up';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: Firestore, private auth: AuthService) { }

  getUser(): Observable<{user: NewUser|null, signups: SignUp[]}> {
  return this.auth.currentUser.pipe(
    switchMap(authUser => {
      if (!authUser) {
        return of({
          user: null,
          signups: []
        });
      }
      return from(this.getById(authUser.uid));
    })
  );
}

  private async getById(userid: string): Promise<{user: NewUser|null, signups: SignUp[]}> {
  try {
    const userDoc = doc(this.firestore, 'Users', userid);
    const userSnapshot = await getDoc(userDoc);

    if (!userSnapshot.exists()) {
      return {
        user: null,
        signups: []
      }
    }

    const userData = userSnapshot.data() as NewUser;
    const user = {...userData, id: userid};

    if(!user.signups || user.signups.length === 0) {
      return {
        user,
        signups: []
      };
    }

    return {
        user,
        signups: []
      }; 
  } catch (error) {
    console.error('Hiba', error);
    return {user: null, signups:[]}
  }
}


}
