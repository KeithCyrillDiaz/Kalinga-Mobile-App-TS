import { initializeApp } from "firebase/app"
import { getAuth, browserLocalPersistence, setPersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyDtCkbfOzId28gjuDhnIjpup2zrMFelkMU",
  authDomain: "kalinga-ts.firebaseapp.com",
  projectId: "kalinga-ts",
  storageBucket: "kalinga-ts.appspot.com",
  messagingSenderId: "564944131726",
  appId: "1:564944131726:web:3954f8417a15b50b141bdf",
  measurementId: "G-65RCSDVKHE"
};

// Initialize Firebase
export const fireBaseApp = initializeApp(firebaseConfig);
    console.log('Firebase app is initialized:', fireBaseApp.name);

export const auth = getAuth(fireBaseApp);

// const setupAuthPersistence = async () => {
//   try {
//     await setPersistence(auth, browserLocalPersistence);
//   } catch (error) {
//     console.error("Error setting persistence:", error);
//   }
// };

// // Call this function when initializing your app
// setupAuthPersistence();
