import * as React from 'react'
import Layout from '../components/layout'
import HeadInfo from '@components/HeadInfo'
import Greetings from '@components/Greetings'
import Links from '@components/Links'
import Seo from '@components/Seo'

const Index = () => (
  <Layout>
    <Seo title="About" />
    <HeadInfo />
    <Greetings />
    <Links />
  </Layout>
)

export default Index
