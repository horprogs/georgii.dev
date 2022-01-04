import React from 'react'
import styled from 'styled-components'

const Link = styled.a`
  text-decoration: none;
  display: block;
  margin: 0 32px;
  border-radius: 8px;
  color: inherit;
  border: 1px solid #ebebeb;
  max-width: 350px;
  overflow: hidden;

  @media all and (max-width: 835px) {
    margin: 16px 0;
  }
`
const Title = styled.div<{ size: number }>`
  font-size: ${props => props.size}px;
  margin-bottom: 16px;
  padding: 16px 16px 0;
`

const Description = styled.div`
  font-size: 18px;
  line-height: 1.5;
  padding: 0 16px 16px;
`

const Img = styled.div`
  width: 100%;
  height: 200px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
`

type Props = {
  link: string
  img: string
  title: string
  description: string
  titleSize?: number
}

const PostItem = ({ link, img, title, description, titleSize = 32 }: Props) => (
  <Link href={link} target="_blank" rel="noopener noreferrer">
    <Img
      style={{
        backgroundImage: `url(/assets/${img})`,
      }}
    />
    <Title size={titleSize}>{title}</Title>
    <Description>{description}</Description>
  </Link>
)

export default PostItem
