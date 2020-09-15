import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import Layout from './Components/Layaut'

// -------- ------- ------ ----- Pages ----- ------ ------- --------
import Welcome from './Pages/Welcome'
import Tasks from './Pages/Tasks'
import NotFound from './Pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/Welcome" component={Welcome} />
          <Route exact path="/Tasks" component={Tasks} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
