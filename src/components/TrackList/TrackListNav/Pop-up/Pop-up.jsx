import React from "react";
import { listTrack } from "../../obj";

function PopUp({ name }) {
  let newClassName = "";
  if (name === "button-author") {
    newClassName = "autor";
    return (
      <div className={newClassName}>
        {listTrack.map((track, id) => {
          return <a className="pop-up__text" key={id}>{track.autor}</a>;
        })}
      </div>
    );
  } else if (name === "button-year") {
    newClassName = "year";
    return (
      <div className={newClassName}>
        {/*{listTrack.map((track, id) => {*/}
        {/*  return <a className="pop-up__text" key={id}>{track.autor}</a>;*/}
        {/*})}*/}
        <a className="pop-up__text">2020</a>
        <a className="pop-up__text">2010</a>
        <a className="pop-up__text">2000</a>
        <a className="pop-up__text">1990</a>
      </div>
    );
  } else if (name === "button-genre") {
    newClassName = "genre";
    return (
      <div className={newClassName}>
        {/*{listTrack.map((track, id) => {*/}
        {/*  return <a className="pop-up__text" key={id}>{track.autor}</a>;*/}
        {/*})}*/}
        <a className="pop-up__text">Поп</a>
        <a className="pop-up__text">Рок</a>
        <a className="pop-up__text">Альтернатива</a>
        <a className="pop-up__text">Реп</a>
        <a className="pop-up__text">Блюз</a>
        <a className="pop-up__text">Инди</a>
      </div>
    );
  }

}

export default PopUp;