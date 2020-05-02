import { ThemeZoom }     from './theme'
import { FontSize } from './types'
import  defaults, { Settings } from './settings'
interface GlobalState {
    settings: Settings
    fullScreen: boolean
    palette?: any
    themeZoom: ThemeZoom,
    fontSize: FontSize,
    setThemeZoom: (themeZoom: ThemeZoom) => void
    setSettings : (settings: Settings) => void
}

const fullScreen = false
const themeZoom:ThemeZoom =  { zoom: 1, theme: 'material'}
const defaultSettings: Settings =  defaults

export const globalState: GlobalState = {
    
    fullScreen,
    themeZoom,
    settings: defaultSettings,
    fontSize: {
        xs: '0.5rem',
        sm: '0.75rem',
        md: '1rem',
        lg: '1.25rem',
        xl: '1.5rem'
    },
    setThemeZoom: (_themeZoom:ThemeZoom) => {
    },
    setSettings: (_settings: Settings) => {
       
    }
}

export default globalState
