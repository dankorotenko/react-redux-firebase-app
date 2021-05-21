import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layout/Navbar';
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
          <Route path="/project/:id">
            <ProjectDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
