import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layout/Navbar';
import CreateProject from './components/projects/CreateProject';
import ProjectDetails from './components/projects/ProjectDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path='/project/:id' component={ProjectDetails} />
          <Route path="/signin">
            <SignIn/>
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/create">
            <CreateProject />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
