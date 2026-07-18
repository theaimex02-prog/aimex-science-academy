import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCa4KTPc0X4tv779QXJYIGddcAJX0J9Acs",
  authDomain: "aimex-science-academy.firebaseapp.com",
  projectId: "aimex-science-academy",
  storageBucket: "aimex-science-academy.firebasestorage.app",
  messagingSenderId: "515629231624",
  appId: "1:515629231624:web:1147c1f66c0df4fcc3ebbd",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;