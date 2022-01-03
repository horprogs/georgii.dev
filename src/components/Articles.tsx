import React from 'react'
import styled from 'styled-components'
import { H2 } from '@components/Common'
import { graphql, useStaticQuery } from 'gatsby'
import { DataInterface } from '@src/interfaces/data'

const Wrap = styled.div`
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Content = styled.div`
  display: flex;
  justify-content: center;

  @media all and (max-width: 835px) {
    flex-direction: column;
  }
`

const Link = styled.a`
  text-decoration: none;
  display: block;
  margin: 0 32px;
  border-radius: 8px;
  color: inherit;
  border: 1px solid #ebebeb;
  max-width: 355px;

  @media all and (max-width: 835px) {
    margin: 16px 0;
  }
`
const Title = styled.div`
  font-size: 22px;
  margin-bottom: 16px;
  padding: 16px 16px 0;
  line-height: 1.5;
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

const Articles = () => {
  const { site } = useStaticQuery<DataInterface>(
    graphql`
      query {
        site {
          siteMetadata {
            articles {
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

  const data = site.siteMetadata.articles

  return (
    <Wrap>
      <H2>Articles</H2>
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

export default Articles
