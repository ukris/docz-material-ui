import React, { ReactNode, useState, useEffect } from 'react'

import clsx from 'clsx'

import Person from '@material-ui/icons/Person'
import { OverridableComponent } from '@material-ui/core/OverridableComponent'
import { SvgIconTypeMap } from '@material-ui/core/SvgIcon'
import { WithStyles, withStyles, Theme} from '@material-ui/core/styles'

import { hashNumber, getInitials } from '../../helpers/misc'
import globalState from '../../global-state'
import { Size} from 'types'

import { LIGHT, WHITE, BLACK, getHashColor } from '../../theme/palette'
import { Shape } from './Avatar.types'

export type AvatarType = {
  src?: string
  name?: string
}

// @ts-ignore
export function valToAvatars(values:any[]):AvatarType[]  {
  return values.map(val=>{
    return{
      src:val[0],
      name: val[1]
    }
  })
}

const styles = (theme: Theme):any => {
  // @ts-ignore
    const { fontSize, palette, shape, zoomSpacing,typography } = theme
    const color =  palette.type === 'light' ? palette.grey[400] : palette.grey[600]
    const def = palette.background.default
    const spacing2 = zoomSpacing(2)
    const spacing3 = zoomSpacing(3)
    const spacing4 = zoomSpacing(4)
    const spacing5 = zoomSpacing(5)
    const spacing6 = zoomSpacing(6)

    return {
        root: {
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            fontFamily: typography.fontFamily,
            lineHeight: 1,
            overflow: 'hidden',
            userSelect: 'none',
        },
        /* Styles applied to the root element if not `src` or `srcSet`. */
        colorDefault: {
            color: def,
            backgroundColor: color
        },
        /* Styles applied to the root element if `variant="circle"`. */
        circle: {
          borderRadius: '50%',
        },
        border: {
          border: `2px solid ${def}`
        },
        noClass: {
          
        },
        /* Styles applied to the root element if `variant="rounded"`. */
        round: {
            borderRadius: shape.borderRadius,
        },
        /* Styles applied to the root element if `variant="square"`. */
        square: {
            borderRadius: 0,
        },
        /* Styles applied to the img element if either `src` or `srcSet` is defined. */
        img: {
            width: '100%',
            height: '100%',
            textAlign: 'center',
            // Handle non-square image. The property isn't supported by IE 11.
            objectFit: 'cover',
            // Hide alt text.
            color: 'transparent',
            // Hide the image broken icon, only works on Chrome.
            textIndent: 10000,
            },
            /* Styles applied to the fallback icon */
            fallback: {
            width: '75%',
            height: '75%',
        },
        xs: {
            width: spacing2,
            height: spacing2,
            fontSize: fontSize.xs
        },
        sm: {
            width: spacing3,
            height: spacing3,
            fontSize: fontSize.sm
        },
        md: {
            width: spacing4,
            height: spacing4,
            fontSize: fontSize.md
        },
        lg: {
            width:  spacing5,
            height: spacing5,
            fontSize: fontSize.lg
        },
        xl: {
            width: spacing6,
            height: spacing6,
            fontSize: fontSize.xl
        }
    }
}

export interface StyleProps  extends WithStyles<typeof styles> {
   
}

export interface AvatarProps extends StyleProps, AvatarType {
    imgProps?: React.ImgHTMLAttributes<HTMLImageElement>
    size?: Size
    shape?: Shape
    border?: boolean
    className?: string
    style?: object
    children?: ReactNode
    component?: any
    extra?: boolean
    Icon?:  OverridableComponent<SvgIconTypeMap<{}, "svg">> | null
}

const Avatar = function Avatar(props: AvatarProps) {
    const {
      name,
      children: childrenProp,
      classes,
      className,
      component: Component = 'span',
      imgProps,
      src,
      size='md',
      shape = 'circle',
      border = false,
      style={},
      extra,
      Icon,
      ...other
    } = props
    const { palette } = globalState
    const [loadedSrc, setLoadedSrc] = useState<boolean>(false)

    let children = null;
    const borderCls = border ? 'border' : 'noClass'

    useEffect(()=> {
      if (src) {
        const image = new Image()
        image.src = src
        image.onload = () => {
          setLoadedSrc(true)
        }
        image.onerror = () => {
        }
      }
    },[src, setLoadedSrc ])

    if (loadedSrc) {
      children = (
        <img
          alt={name}
          src={src} 
          className={classes.img}
          {...imgProps}
        />
      )
    } else if (childrenProp != null) {
      children = childrenProp;
    } else if (name) {
      if (!extra) {
        const number = hashNumber(name)
        const color = getHashColor(number)
        children = getInitials(name)
        // @ts-ignore
        style.backgroundColor = color
          // @ts-ignore
        style.color = palette.type === LIGHT ? WHITE : BLACK
      } else {
        children = name
      }
    } else {
      children = Icon? <Icon className={classes.fallback} />: <Person className={classes.fallback} />;
    }
    
    return (
      <Component
        className={clsx(
          classes.root,
          classes.system,
          classes[borderCls],
          classes[shape],
          classes[size],
          {
            [classes.colorDefault]: !!!src,
          },
          className,
        )}
        style={style}
        {...other}
      >
        {children}
      </Component>
    );
}
export default withStyles(styles)(Avatar)