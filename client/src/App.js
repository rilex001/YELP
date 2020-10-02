import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { RestourantdetailPage } from './routes/RestourantdetailPage'
import { UpdatePage } from './routes/UpdatePage'


export const App = () => {
  return (
    <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/restoraunts/:id/update" component={UpdatePage} />
            <Route exact path="/restourants/:id" component={RestourantdetailPage} />
          </Switch>
        </Router>
    </div>
  )
}
