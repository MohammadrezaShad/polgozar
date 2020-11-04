import React from 'react'
import { Route, Switch } from 'react-router-dom'
import page404 from 'containers/Page/404'

const routes = [
  {
    path: '',
    component: () => <div>ooooo</div>,
    exact: true,
  },
  {
    path: 'manage-users',
    component: () => <div>fasfaf</div>,
    exact: true,
  },
]

const AdminRouter = ({ url }) => {
  return (
    <Switch>
      {routes.map((singleRoute) => {
        const { path, exact, ...otherProps } = singleRoute
        return (
          <Route
            exact={!!exact}
            key={path}
            path={`${url}/${path}`}
            {...otherProps}
          />
        )
      })}
      <Route
        component={page404} // if no page matched
      />
    </Switch>
  )
}

export default AdminRouter
