import Products from './components/Products';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import State from './components/State';
import Register from './components/Register';
import Main from './Main';
import Contact from './components/Contact';
import { BrowserRouter as Router ,Route,Switch} from 'react-router-dom';
import Card from './components/Card';
import Shoes from './components/Shoes';
import Product from './components/Product';
import Error from './components/Error';
import FrontPage from './components/FrontPage';
import login from './components/Login.jsx';
function App() {
  return (
    <div>
        <Router>
        <Switch>
        
        <Route path="/contactedited" component={Contact} />
        <Route path="/frontpage" component={FrontPage} />
        <Route path="/products" component={Products} />
        <Route path="/product" component={Product} />
        <Route path="/login" component={login} />
        <Route path="/home"  component={Home}/>
        <Route path="/shoes"  component={Shoes}/>
        <Route path="/card" component={Card} />
        <Route path="/state" component={State} />
        <Route path="/navbar" component={Navbar} />
        <Route path="/register" component={Register} />
        <Route path="/error" component={Error} />
        <Route path="/" component={Main} />
        <Route path="*" component={Error} />
       
        </Switch>
        </Router>
        
    </div>
  );
}

export default App;
