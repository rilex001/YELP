import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './routes/Home'
import  UpdatePage  from './routes/UpdatePage'
import RestourantDetailPage from './routes/RestourantDetailPage'
import { RestaurantsContextProvider } from './context/RestaurantsContext'
import Landing from './components/Landing'
import SignUp from './components/SignUp'



export const App = () => {
  return (
    <RestaurantsContextProvider>
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/restaurant" component={Home} />
            <Route exact path="/SignUp" component={SignUp} />
            <Route exact path="/restaurants/:id/update" component={UpdatePage} />
            <Route exact path="/restaurants/:id" component={RestourantDetailPage} />
          </Switch>
        </Router>
      </div>
    </RestaurantsContextProvider>
    
  )
}
