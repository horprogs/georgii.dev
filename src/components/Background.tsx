import React, { useEffect, useState } from 'react'
import styled, { Keyframes, keyframes } from 'styled-components'

const Item = styled.div<{
  left: number
  top: number
  width: number
  delay: number
  animation: Keyframes
}>`
  width: ${props => props.width}px;
  height: ${props => props.width}px;
  background: url('/backgroundItem.svg') no-repeat center center / contain;
  left: ${props => props.left}px;
  top: ${props => props.top}px;
  position: absolute;
  animation: ${props => props.animation} linear 4s ${props => props.delay}s infinite;
  opacity: 0;
`

const MIN_WIDTH = 40
const MAX_WIDTH = 95

type Props = {
  anchor?: HTMLElement | null
}

const Background = ({ anchor }: Props) => {
  const [items, setItems] = useState(new Array(48).fill(0))

  const { width, height, top, left } = anchor?.getBoundingClientRect() || {}

  useEffect(() => {
    if (
      width === undefined ||
      height === undefined ||
      top === undefined ||
      left === undefined
    ) {
      return
    }

    const renderItems = () => {
      setItems(prevState =>
        prevState.map(() => {
          const itemWidth = Math.random() * (MAX_WIDTH - MIN_WIDTH) + MIN_WIDTH

          return {
            id: Math.random(),
            left: Math.random() * width + left - itemWidth * 2,
            top: Math.random() * (height - itemWidth),
            delay: Math.random() * 4,
            width: itemWidth,
          }
        }),
      )
    }

    renderItems()
  }, [width, height, top, left])

  const animation = keyframes`
 0% { transform: scale(1); opacity: 1; }
 100% { transform: scale(3); opacity: 0; }
`

  return (
    <>
      {items.map((item, i) => (
        <Item
          key={item.id || i}
          left={item.left}
          top={item.top}
          width={item.width}
          animation={animation}
          delay={item.delay}
        />
      ))}
    </>
  )
}

export default Background
