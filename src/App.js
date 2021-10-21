//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navegacion from './Components/Navegacion/Navegacion';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import CategoryListContainer from './Components/CategoryListContainer/CategoryListContainer'
import { createContext } from 'react';
import  CartContextProvider  from './Context/CartContext';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';



export const AppContext = createContext()
library.add(fas,)

function App() {

  

  return (
    <AppContext.Provider>
      {/* <CartContextProvider> */}
        <BrowserRouter>
          <Navegacion/>
          <Switch>
            <Route exact path="/">
          <ItemListContainer/>
            </Route>
            {/* <Route exact path="*">
              <h1>Pagina no encontrada</h1>
            </Route> */}
            <Route exact path="/categories/:category"> 
                <CategoryListContainer/>
            </Route>
            <Route exact path="/info/:id">
                <ItemDetailContainer/>
            </Route>
            <Route exact path="/cart">

            </Route>
          </Switch>
        </BrowserRouter>
      {/* </CartContextProvider> */}
    </AppContext.Provider>
  );
}

export default App;
