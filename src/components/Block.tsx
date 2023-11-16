import React, { useEffect, useRef } from 'react'

interface Props {
  value: string;
  animated?: boolean;
  id?: string;
}

export default function Block (props: Props) {
  const { value, animated, id } = props;
  const ref = useRef(null)

  return (
    <div id={id} ref={ref} className={`block ${animated ? 'block--animated' : ''}`}>
      <span>{value}</span>
    </div>
  )
}