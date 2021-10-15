//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navegacion from './Components/Navegacion/Navegacion';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import StageListContainer from './Components/StageListContainer/StageListContainer'
import { createContext } from 'react';
import { CartContext } from './Context/CartContext';



export const AppContext = createContext()
library.add(fas,)

function App() {

  

  return (
    <AppContext.Provider>
      <CartContext.Provider>
    <BrowserRouter>
      <Navegacion/>
      <Switch>
        <Route exact path="/">
      <ItemListContainer/>
        </Route>
        {/* <Route exact path="*">
          <h1>Pagina no encontrada</h1>
        </Route> */}
        <Route exact path="/stages/:stage"> 
            <StageListContainer/>
        </Route>
      </Switch>
    </BrowserRouter>
    </CartContext.Provider>
    </AppContext.Provider>
  );
}

export default App;
