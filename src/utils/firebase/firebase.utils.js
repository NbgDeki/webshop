import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBEEcDgJITdageCf8KGfIlbbFRAp594Au8',
  authDomain: 'crwn-clothing-db-54f76.firebaseapp.com',
  projectId: 'crwn-clothing-db-54f76',
  storageBucket: 'crwn-clothing-db-54f76.appspot.com',
  messagingSenderId: '531407662560',
  appId: '1:531407662560:web:07cd2a38284db496ab0f85'
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
