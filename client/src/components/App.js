import React from 'react';
import {Router,Route,Switch} from 'react-router-dom';
import PlanCreate from './plans/PlanCreate';
import PlanDelete from './plans/PlanDelete';
import PlanShow from './plans/PlanShow';
import PlanList from './plans/PlanList';
import PlanEdit from './plans/PlanEdit';
import Header from './Header';
import history from '../history';
const  App = () => {
  return (
    <div className="ui container">
        <Router history={history}>
            <div>
            <Header/>
              <Switch>
                <Route path="/" exact component={PlanList}/>
                <Route path="/plan/new" exact component={PlanCreate}/>
                <Route path="/plan/edit/:id" exact component={PlanEdit}/>
                <Route path="/plan/delete/:id" exact component={PlanDelete}/>
                <Route path="/plan/show/:id" exact component={PlanShow}/>
              </Switch>
            </div>
        </Router>
    </div>
  );
}

export default App;
