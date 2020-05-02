import React, { useContext } from 'react'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles'
import createTheme from './theme'
import ThemeContext from './theme-context'

export default function ThemeProvider(props: any) {
  const { children } = props
  const { themeZoom } = useContext(ThemeContext)
  return <MuiThemeProvider theme={createTheme(themeZoom)}> {children}</MuiThemeProvider>
}
