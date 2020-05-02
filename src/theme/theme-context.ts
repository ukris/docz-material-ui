import React from 'react'

// Create a context for the current theme (with null as the default).
import { ThemeZoom } from './index'
interface ThemeContextProps {
  themeZoom: ThemeZoom
  setThemeZoom: (themeZoom: ThemeZoom) => void
}
export const ThemeContext = React.createContext({} as ThemeContextProps)

export default ThemeContext
