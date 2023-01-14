import React, { useEffect } from "react";
import Log from "../component/Login";
import "../Form.css";
import { useNavigate } from "react-router-dom";
import { signIn, appFirebase, googleSignUp } from "../firebaseLog";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Login() {
  const navigator = useNavigate();
  const auth = getAuth(appFirebase());
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      localStorage.setItem("key", true);
      
      navigator("/dashboard");

      localStorage.setItem("userID", JSON.stringify(uid));
      // ...
    } else {
      // User is signed out
      // ...
      console.log("out");
    }
  });

  useEffect(() => {
    const form = document.getElementById("mainForm");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      signIn(email, password);
    });
    const googlebtn = document.querySelector(".submitGoogle");

    googlebtn.onclick = () => {
      googleSignUp();
    };
  }, []);

  return (
    <div>
      <Log />
    </div>
  );
}
