import React from 'react'
import BasicCard from "../Card/Card";
import "./UIShowComp.css";
import uipagesdata from "../../data/uipagesdata";


const UIShowComp = () => {
  return (
    <div className="px-md-5 pt-md-5 px-sm-3 pt-3 px-3 uishow-comp">
      {uipagesdata.map((cardData, index) => {
        return (
          <BasicCard
            title={cardData.title}
            imgSrc={cardData.imgSrc}
            onClick={() => (window.location.href = cardData.url)}
            key={index}
          />
        );
      })}
    </div>
  )
}

export default UIShowComp