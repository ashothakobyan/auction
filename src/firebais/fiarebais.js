import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCcu2OOK2f6r6reLHvPJ82E9lozwUJ7-BY",
  authDomain: "my-app-8e6b1.firebaseapp.com",
  projectId: "my-app-8e6b1",
  storageBucket: "my-app-8e6b1.appspot.com",
  messagingSenderId: "641212395427",
  appId: "1:641212395427:web:6b6eea9321aa7f7c313416",
  measurementId: "G-QDZNQFK34N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

export async function getCities(db) {
    const citiesCol = collection(db, 'User');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    console.log(cityList)
  }

  

const auth = getAuth();
 createUserWithEmailAndPassword(auth, "hakobyanashot2000@mail.ru", "123456789")
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
