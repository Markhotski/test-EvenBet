import React, { useEffect, useRef } from 'react'

interface Props {
  value: string;
  animated?: boolean;
}

export default function Block (props: Props) {
  const { value, animated } = props;
  const ref = useRef(null)

  return (
    <div ref={ref} className={`block ${animated ? 'block--animated' : ''}`}>
      <span>{value}</span>
    </div>
  )
}