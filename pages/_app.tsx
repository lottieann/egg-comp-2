import * as React from 'react'

import '../styles/globals.css'

require("babel-core/register")
require("babel-polyfill")

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
