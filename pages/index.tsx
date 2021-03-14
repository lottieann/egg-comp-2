import * as React from 'react'
import Head from 'next/head'

import { HomePage } from '../src/HomePage'
import { NavBar } from '../src/NavBar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>2021 Egg Competition</title>
      </Head>
      <main >
        <HomePage />
        <NavBar currentPage="HomePage"/>
      </main>
    </div>
  )
}
