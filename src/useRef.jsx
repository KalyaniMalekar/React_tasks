import React, { useRef } from 'react'
import style from './UseRef.module.css'

const UseRef = () => {
    let element = useRef()
    let moveElement = ()=>{
        element.current.style.animation = "move 2s ease";
        console.log(element);
    }
  return (
    <div>
      <section className={style.parent}>
        <section className={style.child} ref={element} onClick={moveElement}>
        </section>
      </section>
    </div>
  )
}

export default UseRef