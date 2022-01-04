import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { DataInterface } from '@src/interfaces/data'
import PostItem from '@components/PostItem'
import Section from '@components/Section'

const OpenSource = () => {
  const { site } = useStaticQuery<DataInterface>(
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
    <Section title="Open-source projects">
      {data.map(item => (
        <PostItem
          key={item.title}
          img={item.img}
          title={item.title}
          link={item.link}
          description={item.description}
        />
      ))}
    </Section>
  )
}

export default OpenSource
