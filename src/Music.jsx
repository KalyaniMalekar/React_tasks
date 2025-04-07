import React, { useRef, useState } from 'react'
import audio from './assets/Audio.mp3'
import audio2 from './assets/Audio2.mp3'
import audio3 from './assets/Audio3.mp3'
import audio4 from './assets/Audio4.mp3'
import audio5 from './assets/Audio5.mp3'
import musicStyle from '../src/Music.module.css'
function Music() {

  const [curTrack, setCurTrack]=useState(0);
  const songs=[audio,audio2,audio3,audio4,audio5]
  let audioRef= useRef()
  

  let handlePlay=()=>{
    audioRef.current.play()
  }

  let handlePause=()=>{
    audioRef.current.pause()
  }
  let handleNext=()=>{
    setCurTrack((prev)=>(prev+1) % songs.length);
    audioRef.current.play()
  }

  let handlePrev=()=>{
    setCurTrack((prev)=>(prev-1  +songs.length) % songs.length);
    audioRef.current.play()
  }

  return (
    <div className={musicStyle.main}>
        <audio src={songs[curTrack]} controls ref={audioRef}></audio>
        <br />
        <button onClick={handlePrev}>Prev</button> 
        <button onClick={handlePlay}>Play</button>
        <button onClick={handleNext}>Next</button>
    </div>
  )
}

export default Music