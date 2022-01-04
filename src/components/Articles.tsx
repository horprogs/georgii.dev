import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { DataInterface } from '@src/interfaces/data'
import PostItem from '@components/PostItem'
import Section from '@components/Section'

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
    <Section title="Articles">
      {data.map(item => (
        <PostItem
          key={item.title}
          img={item.img}
          title={item.title}
          link={item.link}
          description={item.description}
          titleSize={22}
        />
      ))}
    </Section>
  )
}

export default Articles
