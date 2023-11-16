// @ts-nocheck
import React, { useState } from 'react'
import useCoordinates from '../hooks/useCoordinates';

export default function Button() {
  const [seconds, setSeconds] = useState(5);
  const [isDisabled, setDisabled] = useState(false)
  const secondBlockCoordinates = useCoordinates('second')
  let timerID

  const handleClick = () => {
    animateBall()
    setDisabled(true)
    timerID = setInterval(() => tick(), 1000);
  }

  const tick = () => {
    setSeconds(prev => {
      if (prev > 1) {
        return prev - 1
      } else {
        clearInterval(timerID)
        setDisabled(false)
        return 5
      }
    })
  }

  const animateBall = () => {
    const firstBlock = document.getElementById('first')
    const secondBlock = document.getElementById('second')
    const ball = document.getElementById('ball')

    const { left, top, width, height} = firstBlock?.getBoundingClientRect()
    const { left: secondLeft, top: secondTop, width: secondWidth, height: secondHeight} = secondBlockCoordinates ?? secondBlock?.getBoundingClientRect()
    
    const ballAnimation = [
      { left: left + width / 2 + 'px', top: top + height / 2 + 'px', opacity: 1 },
      { left: secondLeft + secondWidth / 2 + 'px', top: secondTop + secondHeight / 2 + 'px', opacity: 1 }
    ];

    ball.animate(ballAnimation, {duration: 2000, iterations: 1})
  }

  return (
    <button 
      className='button' 
      disabled={isDisabled} 
      onClick={handleClick}
    >
      {isDisabled ? `${seconds} sec` : 'Start'}
    </button>
  )
}
