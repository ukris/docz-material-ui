export { default } from './theme-provider'
export { default as theme } from './theme'
export { default as makePalette } from './palette'
export { default as typography } from './typography'
export { default as ThemeContext } from './theme-context'
export { default as ThemeProvider } from './theme-provider'

const Themes = {
  basil: null,
  crane: null,
  material: null,
  materialDark: null,
  pinky: null,
  rally: null,
  reply: null,
}

export type ThemeType = keyof typeof Themes
export type ThemeZoom = {
  theme: ThemeType
  zoom: number
}
export const AVAILABLE_THEMES = Object.keys(Themes) as ThemeType[]
