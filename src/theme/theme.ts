import { createMuiTheme, responsiveFontSizes } from '@material-ui/core'
import { globalState } from '../global-state'
import { makePalette, ThemeZoom } from './index'
// https://www.sipios.com/blog-tech/how-to-use-styled-components-with-material-ui-in-a-react-app
import typography from './typography'

function createTheme(variant: ThemeZoom):any {
  let palette:any = makePalette(variant)
  const { zoom } = variant
  const { colors } = palette
  delete palette.colors
  globalState.palette = colors
  globalState.palette.type = palette.type
  globalState.palette.contrastText = palette.contrastText
  palette = {...palette, ...colors}
  globalState.setThemeZoom(variant)
  const theme = createMuiTheme({
    // @ts-ignore
    zoomFontSize: (factor:number):string => `${0.25 * factor * zoom}rem`,
    zoomSpacing: (factor: number) => spacing(factor * zoom),
    fontSize: globalState.fontSize
  });
  // @ts-ignore
  const { spacing, zoomSpacing, zoomFontSize } = theme
  const fontSize =  {
      xs: zoomFontSize(2),
      sm: zoomFontSize(3),
      md: zoomFontSize(4),
      lg: zoomFontSize(5),
      xl: zoomFontSize(6)
  }
  globalState.fontSize = fontSize
  const modTheme = createMuiTheme(
    /**
     * @see https://material-ui.com/customization/themes/#theme-configuration-variables
     * https://material-ui.com/customization/typography/
     */
    {
      palette,
      // @ts-ignore
      zoomFontSize,
      typography,
      spacing,
      zoomSpacing,
      fontSize,
      props: {
        MuiButtonBase: {
          disableRipple: true
        },
        MuiButton: {
            variant: 'contained'
        },
        MuiTextField: {
            variant: 'outlined'
        }
      },
      zIndex: {
        appBar: 1200,
        drawer: 1100,
      },
      overrides: {
        MuiDrawer: {
          paper: {
            background: '#18202c',
          },
        },
        MuiPaper: {
          // Name of the component ⚛️ / style sheet
          elevation0: {
            // Name of the rule
            boxShadow: '0 0 14px 0 rgba(53,64,82,.05)', // Some CSS
          },
        },
        MuiTableCell: {
          root: { 
            borderBottom: '1px solid rgba(224, 224, 224, .5)', 
            padding: 0 , 
            lineHeight: 0.7
          },
        },
        MuiButton: {
          root: {
            disableElevation: true,
            variant: 'contained'
          }
        },
        MuiTextField: {
          root: {
            variant: 'outlined'
          }
        }
    }}
  )
  //  return responsiveFontSizes(modTheme)
  return modTheme
}

export default createTheme
