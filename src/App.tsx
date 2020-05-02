import React, { useState } from 'react'
import { Router } from 'react-router-dom'
import { ThemeContext, ThemeProvider, ThemeZoom } from './theme'
import globalState from './global-state'
import history from './history'
import Routes from './routes'

function App() {
  const [themeZoom, setThemeZoom] = useState<ThemeZoom>(globalState.themeZoom)

  return (
    <ThemeContext.Provider value={{ themeZoom, setThemeZoom }}>
      <ThemeProvider>
        <Router history={history}>
          <Routes />
        </Router>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default App
