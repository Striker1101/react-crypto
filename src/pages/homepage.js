import React, { useEffect } from "react";
import Nav from "../component/Nav";
import Container from "../component/Container";
import "../App.css";
export default function Homepage() {
  localStorage.setItem("key", false);
  useEffect(() => {
    const menuItem = [...document.querySelectorAll(".menu__item")];

    menuItem.forEach((item) => {
      item.addEventListener("click", () => {
        document.querySelector("#menu__toggle").checked = false;
      });
    });

    var animationElement = [...document.querySelectorAll(".animation")];

    function checkIfInView() {
      animationElement.forEach(function (element) {
        var bounding = element.getBoundingClientRect();
        if (
          bounding.top >= 0 &&
          bounding.left >= 0 &&
          bounding.right <=
            (window.innerWidth || document.documentElement.clientWidth) &&
          bounding.bottom <=
            (window.innerHeight || document.documentElement.clientHeight)
        ) {
          element.classList.add("in-view");
        } else {
          element.classList.remove("in-view");
        }
      });
    }
    window.addEventListener("scroll", checkIfInView);
    setTimeout(() => {
      window.removeEventListener("scroll", checkIfInView);
    }, 10000);
  }, []);
  return (
    <div>
      <Nav />
      <Container />
    </div>
  );
}
