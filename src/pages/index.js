import React from 'react'
import Head from 'next/head'

import Contributors from '../components/Contributors'
import Fonts from '../helpers/Fonts'
import Layout from '../components/Layout'
import Intro from '../components/Intro'
import Overview from '../components/Overview'
import Rewards from '../components/Rewards'

const breakpoints = [500, 915, 1200]

const mq = breakpoints.map(
  bp => `@media (max-width: ${bp}px)`
)

export default class Index extends React.Component {
  async componentDidMount () {
    await Fonts()
  }

  render () {
    return (
      <Layout {...this.props} mediaQueries={mq}>
        <Head>
          <title>secretnodes.org</title>
        </Head>
        <Intro mediaQueries={mq} />
        <Overview mediaQueries={mq} />
        <Rewards mediaQueries={mq} />
        <Contributors mediaQueries={mq} />
      </Layout>
    )
  }
}
