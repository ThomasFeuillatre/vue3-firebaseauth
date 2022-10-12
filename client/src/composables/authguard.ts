import firebase from 'firebase/compat';
import User = firebase.User;

export async function getCurrentUser(): Promise<User | null> {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      unsubscribe();
      resolve(user);
    }, reject);
  });
}
