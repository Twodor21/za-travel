import { FirebaseError } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';

import { auth, mapAuthCodeToMessage } from '@services/firebase';

export function register(name: string, email: string, password: string) {
  return handleAuthError(async () => {
    await createUserWithEmailAndPassword(auth, email, password);
    if (auth.currentUser) {
      await updateProfile(auth.currentUser, { displayName: name });
    } else {
      throw Error('Something went wrong!');
    }
  });
}
export function login(email: string, password: string) {
  return handleAuthError(async () => {
    await signInWithEmailAndPassword(auth, email, password);
  });
}

async function handleAuthError(authFunction: () => Promise<void>) {
  try {
    await authFunction();
  } catch (error) {
    if (error instanceof FirebaseError) {
      throw Error(mapAuthCodeToMessage(error.code));
    }
    throw Error('Something went wrong!');
  }
}

export function logout() {
  return signOut(auth);
}
