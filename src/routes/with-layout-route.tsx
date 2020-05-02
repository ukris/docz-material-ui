import React from 'react'
import { Route } from 'react-router-dom'

const WithLayoutRoute = (props: any) => {
  const { layout: Layout, component: Component, layoutProps, ...rest } = props

  return (
    <Route
      {...rest}
      render={matchProps => (
        <Layout {...layoutProps}>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  )
}

export default WithLayoutRoute
