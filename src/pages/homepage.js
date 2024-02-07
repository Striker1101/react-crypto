import React, { useEffect } from "react";
import Nav from "../component/Nav";
import Container from "../component/Container";
import "../App.css";
import { Helmet } from "react-helmet";
export default function Homepage() {
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
      <Helmet>
        <title>Homepage </title>
        <meta
          name="description"
          content="Join on today as we go through the metaverse universe today, solving your finially limitaion "
        />
        {/* Add other meta tags as needed */}
      </Helmet>

      <Nav />
      <Container />
    </div>
  );
}
