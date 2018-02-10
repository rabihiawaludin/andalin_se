import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './home';
import NameForm from './add';
import NameFormEdit from './edit'

class App extends Component {
   render() {
      return (
         <Router>
            <div>
               <h2>Data Mahasiswa Universitas Pendidikan Indonesia</h2>
               <hr />
               
               <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/Add' component={NameForm} />
                  <Route exact path='/edit/:id' component={NameFormEdit} />
               </Switch>
            </div>
         </Router>
      );
   }
}
export default App;