import * as createMUITheme from '@material-ui/core/styles/createMuiTheme'

// https://medium.com/javascript-in-plain-english/extend-material-ui-theme-in-typescript-a462e207131f

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' 
export type FontSize = {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
}
declare module '@material-ui/core/styles/createMUITheme' {
    interface ThemeOptions {
        zoomFontSize: (factor: number) => string
        zoomSpacing: (factor: number) => number
        fontSize: FontSize
    }
    interface Theme {
        zoomFontSize: (factor:number) => string
        zoomSpacing: (factor: number) => number
        fontSize: FontSize
    }
}