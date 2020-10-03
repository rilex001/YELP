import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './routes/Home'
import  UpdatePage  from './routes/UpdatePage'
import RestourantDetailPage from './routes/RestourantDetailPage'



export const App = () => {
  return (
    <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/restoraunts/:id/update" component={UpdatePage} />
            <Route exact path="/restourants/:id" component={RestourantDetailPage} />
          </Switch>
        </Router>
    </div>
  )
}
