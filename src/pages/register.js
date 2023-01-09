import React, { useEffect } from "react";
import RegisterJsx from "../component/registerJsx";
import { signUpUsername, googleSignUp } from "../firebaseLog";
import { useNavigate } from "react-router-dom";
import "../Form.css";
export default function Register() {
  const navigate = useNavigate();
  useEffect(() => {
    const form = document.getElementById("Form");
    function clicked() {
      const password = document.getElementById("password").value;
      const cpassword = document.getElementById("cPassword").value;
      const email = document.getElementById("email").value;
      const phoneNumber = document.getElementById("phone-number").value;
      const username = document.getElementById("username").value;
      const country = document.getElementById("country").value;
      //check password and confirm password
      if (password !== cpassword) {
        return alert("password do not match");
      }

      //register user on firebase emial/pasword auth
      signUpUsername(email, password, username, phoneNumber, country);
      // return to login page
      navigate("/login");
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      clicked();
    });
    
  }, []);

  return (
    <div>
      <RegisterJsx />
    </div>
  );
}
