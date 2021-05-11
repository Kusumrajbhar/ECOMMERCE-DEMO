import './App.css';
import Header from './component/Header';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import ProductListing from './component/ProductListing';
import ProductDetails from './component/ProductDetails';

function App() {
  return (
    <div className="App">
      <Router>
     <Header /> 
     <Switch>
     <Route exact path='/' component={ProductListing} />
     <Route exact path='/product/:productId' component={ProductDetails} />
     <Route>404 Not Found</Route>
     </Switch>
     </Router>
    </div>
  );
}

export default App;
