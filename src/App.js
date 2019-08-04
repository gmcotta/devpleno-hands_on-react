import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from './Header';
import Generos from './Generos';
import NovoGenero from './NovoGenero';
import EditarGenero from './EditarGenero';

const Home = () => {
  return (
    <h1>Home</h1>
  );
};

function App() {
  /*
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get('/api').then(res => {
      setData(res.data);
    });
  }, []);
  */
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path = '/' exact component = {Home}  />
          <Route path = '/generos' exact component = {Generos} />
          <Route path = '/generos/novo' exact component = {NovoGenero} />
          <Route path = '/generos/:id' exact component = {EditarGenero} />
        </Switch>
    </div>
    </Router>
    
  );
}

export default App;
