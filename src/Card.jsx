import React from 'react'
import cardStyle from '../src/Card.module.css'

function Card({photo,name,sid,year,dept}) {
  return (
    <>
       <section className={cardStyle.card}>
          <img src={photo} alt="pro" />
          <h1>{name}</h1>
          <h2>SID:{sid}</h2>
          <h2>Year:{year}</h2>
          <h2>Dept:{dept}</h2>
       </section>
    </>
  )
}

export default Card