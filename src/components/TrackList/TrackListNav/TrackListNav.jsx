import React, { useState } from "react";
import PopUp from "./Pop-up/Pop-up";

function TrackListNav() {
  const [btnState, setBtnState] = useState("");

  const switchSlide = (className) => {
    if(btnState !== className) {
      setBtnState(className);

    } else {
      setBtnState("");
    }
  };

  return (
    <div className="centerblock__filter filter">
      <div style={{padding:"20px"}}>{btnState !== "" ? <PopUp name={btnState}/> : ""}</div>
      <div className="filter__title">Искать по:</div>
      <div className={btnState === "button-author"? "filter__button button-author _btn-text btn-active": "filter__button button-author _btn-text"} onClick={() => {
        switchSlide("button-author");
      }}>
        исполнителю
      </div>
      <div className={btnState === "button-year" ? "filter__button button-year _btn-text btn-active": "filter__button button-year _btn-text"} onClick={() => {
        switchSlide("button-year");
      }}>году выпуска
      </div>
      <div className={btnState === "button-genre"? "filter__button button-genre _btn-text btn-active": "filter__button button-genre _btn-text"} onClick={() => {
        switchSlide("button-genre");
      }}>жанру
      </div>
    </div>
  );
}

export default TrackListNav;