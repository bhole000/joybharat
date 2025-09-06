import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
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

export const db = getFirestore(app);
export const auth = getAuth(app);   // ✅ use app here
export const storage = getStorage(app);

setPersistence(auth, browserLocalPersistence); // ✅ no async wrapper

export const provider = new GoogleAuthProvider();

export const logInWithEmailAndPassword = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    localStorage.setItem("token", res.user.accessToken);
    return res;
  } catch (err) {
    return { error: err.code === "auth/wrong-password" || err.code === "auth/user-not-found" ? "Invalid credential" : "Authentication failed" };
  }
};

export const registerWithEmailAndPassword = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    return res;
  } catch (err) {
    console.error(err);
    return { error: err.message };
  }
};

export const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const logout = () => signOut(auth);
