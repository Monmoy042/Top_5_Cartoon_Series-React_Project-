import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Cdata from "./Cdata";
import Card from "./Card";

// const cartoonCard = function (value) {
//   return <Card name={value.name} img={value.img} leadChar={value.leadChar} />;
// };

ReactDOM.render(
  <>
    {Cdata.map((value) => {
      return (
        <Card name={value.name} img={value.img} leadChar={value.leadChar} link={value.link} />
      );
    })}
  </>,
  document.getElementById("root")
);
