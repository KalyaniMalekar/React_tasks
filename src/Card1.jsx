import React from 'react'
import cardStyle from '../src/card.module.css'

function Card1({photo,name,eid,role,comp}) {
  return (
     <>
        <section className={cardStyle.card}>
            <img src={photo} alt="Profile" />
            <h1>{name}</h1>
            <h2>EID:{eid}</h2>
            <h2>Role:{role}</h2>
            <h2>Company:{comp}</h2>
        </section>
    </>
  )
}

export default Card1