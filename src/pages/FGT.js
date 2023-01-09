import React, { useEffect } from "react";
import { resetPassword } from "../firebaseLog";
import "../fgt.css";
import Fgt from "../component/Fgt";
import { Link } from "react-router-dom";
export default function FGT() {
  useEffect(() => {
    const form = document.getElementById("mainForm");

    form.addEventListener("submit", (e) => {
      const email = document.getElementById("email".value);
      e.preventDefault();
      resetPassword(email);
    });
  }, []);
  return <Fgt />;
}
