import Users from "./components/Users";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header'
import UserDetail from './components/UserDetail'

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Switch>
        <Route path="/" exact component={Users}/>
        <Route path="/user/:userId" exact component={UserDetail}/>
        <Route> 404</Route>
    

       </Switch>
      </Router>

    </div>
  );
}

export default App;
