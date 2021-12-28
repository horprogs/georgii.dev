import * as React from 'react'
import Layout from '@components/Layout'
import HeadInfo from '@components/HeadInfo'
import Greetings from '@components/Greetings'
import Links from '@components/Links'
import Seo from '@components/Seo'
import OpenSource from '@components/OpenSource'

const Index = () => (
  <Layout>
    <Seo title="About" />
    <HeadInfo />
    <Greetings />
    <OpenSource />
    <Links />
  </Layout>
)

export default Index
