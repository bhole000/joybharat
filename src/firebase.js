import { initializeApp } from "firebase/app";
import { getFirestore,collection, getDocs } from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDoO0v8wRmAvbJTUYm-8NP0hmcyIy3vot0",
  authDomain: "make-and-design.firebaseapp.com",
  projectId: "make-and-design",
  storageBucket: "make-and-design.appspot.com",
  messagingSenderId: "39408261339",
  appId: "1:39408261339:web:6c99437677cc85c38594fe",
  measurementId: "G-ZXC5W00E30",
};

const app = initializeApp(firebaseConfig);
const f_db = getFirestore(app);
export const db = f_db;
export const auth = getAuth();
(async () => {
  await setPersistence(auth, browserLocalPersistence);
})();
export const provider = new GoogleAuthProvider();

const f_logInWithEmailAndPassword = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    localStorage.setItem('token', res._tokenResponse.idToken)
    return res
  } catch (err) {
    if(err.code === "auth/wrong-password" || err.code === "auth/user-not-found") {
      return {
        error: 'Invalid credential',
      }
    }else {
      return {
        error: 'Authentication failed',
      }
    }
  }
};

const f_registerWithEmailAndPassword = async (email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await f_db.addDoc(f_db.collection(f_db, "users"), {
      uid: user.uid,
      authProvider: "email",
      email,
    });
    localStorage.setItem('token', res._tokenResponse.refreshToken)
    return res
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const f_sendPasswordReset = async (email) => {
  try {
    await auth.sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const f_logout = () => {
  auth.signOut(auth);
};

export const registerWithEmailAndPassword = f_registerWithEmailAndPassword;
export const logInWithEmailAndPassword = f_logInWithEmailAndPassword;
export const sendPasswordReset = f_sendPasswordReset;
export const logout = f_logout;

export const storage = getStorage(app);