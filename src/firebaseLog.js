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
  getDoc,
  getFirestore,
  updateDoc,
  arrayUnion,
  Timestamp,
  arrayRemove,
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

      setDoc(doc(db, "deposits", user.uid), { regions: [] });

      setDoc(doc(db, "withdraw", user.uid), { regions: [] });

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
          accountType: "Basic",
          earning: "0.00",
          deposit: "0.00",
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
      check(user);
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      alert(errorMessage);
    });
}

export async function signIn(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // TODO alert weloome user
      // ...
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
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
      status: "pending",
    }),
  })
    .then(() => {
      // Data saved successfully!
      alert("data saved");
    })
    .catch((error) => {
      // The write failed...
      alert(error);
    });
}

export async function saveTrans(collection, document, data) {
  const timestamp = Timestamp.fromDate(new Date());
  // Add a new document with a generated id.
  const trans = doc(db, collection, document);

  // Atomically add a new region to the "regions" array field.
  await updateDoc(trans, {
    regions: arrayUnion({
      ...data,
      time: timestamp,
    }),
  })
    .then(() => {
      // Data saved successfully!
      return { status: 200, message: "success" };
    })
    .catch((error) => {
      // The write failed...
      return { status: 400, message: error };
    });
}

export async function removeField(collection, document, data) {
  // Add a new document with a generated id.
  const depositData = doc(db, collection, document);

  // Atomically add a new region to the "regions" array field.
  await updateDoc(depositData, {
    regions: arrayRemove(data),
  })
    .then(() => {
      // Data saved successfully!
      alert("data removed");
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

async function check(user) {
  const docRef = doc(db, "deposits", user.uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const empthy = docSnap.data();
    if (
      Object.keys(empthy).length === 0 &&
      Object.getPrototypeOf(empthy) === Object.prototype
    ) {
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
        },
      });
    }
  } else {
    // doc.data() will be undefined in this case+
    setDoc(doc(db, "deposits", user.uid), { regions: [] });
    setDoc(doc(db, "withdraw", user.uid), { regions: [] });
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
        accountType: "Basic",
        earning: "0.00",
        deposit: "0.00",
      },
    });
  }
}

export async function transactions(uid) {
  const data = [];
  const docRef1 = doc(db, "deposits", uid);
  const docRef2 = doc(db, "withdraw", uid);

  const res1 = await getDoc(docRef1);
  const res2 = await getDoc(docRef2);

  if (res1.exists()) {
    data.push({ regions: res1.data().regions, type: "deposit" });
  } else {
    // console.log("No deposit found for user with UID:", uid);
  }

  if (res2.exists()) {
    data.push({ regions: res2.data().regions, type: "withdraw" });
  } else {
    // console.log("No withdraw found for user with UID:", uid);
  }

  // Sort the data array by timestamp
  data.sort((a, b) => a.timestamp - b.timestamp);

  return data;
}

export async function getUserDetails(uid) {
  const docRef1 = doc(db, "accounts", uid);

  const res1 = await getDoc(docRef1);

  if (res1.exists()) {
    return res1.data().log;
  } else {
    console.log("No deposit found for user with UID:", uid);
  }
}
