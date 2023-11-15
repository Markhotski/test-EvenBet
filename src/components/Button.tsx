import React, { useState } from 'react'

export default function Button() {
  const [seconds, setSeconds] = useState(5);
  let timerID: any

  const handleClick = () => {
    timerID = setInterval(() => tick(), 1000);
    
    const firstBlock = document.getElementsByClassName('block--animated')[0]
    const secondBlock = document.getElementsByClassName('block')[1]
    const ball = document.getElementsByClassName('ball')[0]

    const { left, top, width, height} = firstBlock.getBoundingClientRect()
    const { left: secondLeft, top: secondTop, width: secondWidth, height: secondHeight} = secondBlock.getBoundingClientRect()
    const ballAnimation = [
      { left: left + width / 2 + 'px', top: top + height / 2 + 'px' },
      { left: secondLeft + secondWidth / 2 + 'px', top: secondTop + secondHeight / 2 + 'px' }
    ];
    // @ts-ignore
    ball.style.top = top + height / 2 + 'px'
    // @ts-ignore
    ball.style.left = left + width / 2 + 'px'
    // @ts-ignore
    ball.classList.add('ball--visible')
    //@ts-ignore
    ball.animate(ballAnimation, {duration: 2000, iterations: 1})
    setTimeout(() => {
      ball.classList.remove('ball--visible')
    }, 2000)
  }

  const tick = () => {
    setSeconds(prev => {
      if (prev) {
        return prev - 1
      } else {
        clearInterval(timerID)
        return 5
      }
    })
  }

  return (
    <button 
      className='button' 
      disabled={!!seconds && seconds !== 5} 
      onClick={handleClick}
    >
      {seconds && seconds !== 5 ? `${seconds} sec` : 'Start'}
    </button>
  )
}
