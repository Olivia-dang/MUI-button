import "../styles/globals.css"
import React from "react"
import MuiThemeProvider from "@material-ui/styles/ThemeProvider"

const theme = {}

import type { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side")
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])
  return (
    <MuiThemeProvider theme={theme}>
      <Component {...pageProps} />
    </MuiThemeProvider>
  )
}
export default MyApp