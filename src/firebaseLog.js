// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import {
  setDoc,
  doc,
  getFirestore,
  updateDoc,
  arrayUnion,
  Timestamp,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzCAFHcWlUDKxPxd0vrm7Cngwi7eMqzl4",
  authDomain: "cryptogram-faa0f.firebaseapp.com",
  projectId: "cryptogram-faa0f",
  storageBucket: "cryptogram-faa0f.appspot.com",
  messagingSenderId: "599366260193",
  appId: "1:599366260193:web:5dc6f9198ba78cdadf2ea0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const timestamp = Timestamp.fromDate(new Date());
export function appFirebase() {
  return app;
}
export async function signUpUsername(
  signupemail,
  signuppassword,
  display,
  phoneNumber,
  country
) {
  createUserWithEmailAndPassword(
    auth,
    signupemail,
    signuppassword,
    display,
    phoneNumber
  )
    .then((userCredential) => {
      // Signed in

      const user = userCredential.user;

      console.log(user);
      user.displayName = display;
      user.phoneNumber = phoneNumber;

      setDoc(doc(db, "deposits", user.uid), {});

      setDoc(doc(db, "accounts", user.uid), {
        log: {
          email: signupemail,
          password: signuppassword,
          username: display,
          phoneNumber: phoneNumber,
          country: country,
          photo: user.photoURL,
          verified: user.emailVerified,
          guest: user.isAnonymous,
          created: user.reloadUserInfo.createdAt,
          time: timestamp,
        },
      });

      //auth.currentUser
      sendEmailVerification(user).then(() => {
        auth.languageCode = "it";
        // To apply the default browser preference instead of explicitly setting it.
        // Email verification sent!
        // ...
        alert("emailsent");
      });
      // writeUserData(uniqid(), signupemail, signuppassword);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorCode, errorMessage);
      // ..
    });
}

export async function googleSignUp() {
  const provider = new GoogleAuthProvider();
  auth.languageCode = "it";
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      setDoc(doc(db, "deposits", user.uid), {});
      setDoc(doc(db, "accounts", user.uid), {
        log: {
          email: user.email,
          password: "",
          username: user.displayName,
          phoneNumber: user.phoneNumber,
          country: "",
          photo: user.photoURL,
          verified: user.emailVerified,
          guest: user.isAnonymous,
          created: user.reloadUserInfo.createdAt,
          time: timestamp,
        },
      });

      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      alert(errorCode, errorMessage, email, credential);
    });
}

export async function signIn(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode, errorMessage);
    });
}

export async function resetPassword(email) {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      console.log("reset sent ");
      // Password reset email sent!
      // ..
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode, errorMessage);
      // ..
    });
}
export async function addDeposit(document, coin, amount) {
  const timestamp = Timestamp.fromDate(new Date());
  // Add a new document with a generated id.
  const depositData = doc(db, "deposits", document);

  // Atomically add a new region to the "regions" array field.
  await updateDoc(depositData, {
    regions: arrayUnion({
      coin: coin,
      amount: amount,
      img: "",
      time: timestamp,
      status: 'pending'
    }),
  })
    .then(() => {
      // Data saved successfully!
      console.log("data saved");
    })
    .catch((error) => {
      // The write failed...
      console.log(error);
    });
}


export async function Logout() {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log("logedout");
    })
    .catch((error) => {
      // An error happened.
    });
}
