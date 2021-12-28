import React from 'react'
import styled from 'styled-components'
import { H2 } from '@components/Common'
import Github from '@components/img/github.svg'
import Linkedin from '@components/img/linkedin.svg'
import Stackoverflow from '@components/img/stackoverflow.svg'
import { StaticImage } from 'gatsby-plugin-image'
import { graphql, useStaticQuery } from 'gatsby'

const Wrap = styled.div`
  padding: 60px 0 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Content = styled.div`
  display: flex;
  justify-content: center;
`

const Link = styled.a`
  text-decoration: none;
  display: block;
  margin: 0 32px;
  border-radius: 8px;
  color: inherit;
  border: 1px solid #cbcbcb;
  max-width: 350px;
`
const Title = styled.div`
  font-size: 32px;
  margin-bottom: 16px;
  padding: 0 16px;
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
  background-size: contain;
`

const OpenSource = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            openSource {
              title
              description
              link
              img
            }
          }
        }
      }
    `,
  )

  const data = site.siteMetadata.openSource

  return (
    <Wrap>
      <H2>Open-source projects</H2>
      <Content>
        {data.map(item => (
          <Link href={item.link} target="_blank" rel="noopener noreferrer">
            <Img
              style={{
                backgroundImage: `url(/assets/${item.img})`,
              }}
            />
            <Title>{item.title}</Title>
            <Description>{item.description}</Description>
          </Link>
        ))}
      </Content>
    </Wrap>
  )
}

export default OpenSource
