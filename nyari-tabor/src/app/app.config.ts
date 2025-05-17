import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "nyari-tabor-7ec17", appId: "1:51362131782:web:8df140020cf54a11443f47", storageBucket: "nyari-tabor-7ec17.firebasestorage.app", apiKey: "AIzaSyCD2SRT4iXEs85WCCyrLXt1LQewD3yp_Rs", authDomain: "nyari-tabor-7ec17.firebaseapp.com", messagingSenderId: "51362131782", measurementId: "G-P5FZ96X1JP" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
