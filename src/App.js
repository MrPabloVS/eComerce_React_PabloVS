//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navegacion from './Components/Navegacion/Navegacion';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {BrowserRouter, Route, Switch} from 'react-router-dom'




library.add(fas,)

function App() {
  return (
    <BrowserRouter>
      <Navegacion/>
      <Switch>
        <Route exact path="/">
      <ItemListContainer/>
        </Route>
        <Route exact path="*">
          <h1>Pagina no encontrada</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
