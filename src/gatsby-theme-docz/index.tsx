import React, { useState } from 'react'

import { ThemeContext, ThemeProvider, ThemeZoom } from '../theme'
import globalState from '../global-state'

export default (props:any) => {
  const [themeZoom, setThemeZoom] = useState<ThemeZoom>(globalState.themeZoom)

  return (
    <ThemeContext.Provider value={{ themeZoom, setThemeZoom }}>
      <ThemeProvider>
      {props.children}
    </ThemeProvider>
    </ThemeContext.Provider>
  )
}