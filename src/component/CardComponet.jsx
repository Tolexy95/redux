import React from 'react'
import style from "./cardComponent.module.css"

const CardComponent = ({image}) => {
  return (
    <div className={style.cardContainer}>
    
        <img src={image} alt=""  className={style.image}/>
        
         </div>
  )
}

export default CardComponent