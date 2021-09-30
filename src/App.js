//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navegacion from './Components/Navegacion/Navegacion';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import ItemCount from './Components/ItemCount/ItemCount'



library.add(fas,)

function App() {
  return (
    <>
      <Navegacion/>
      <ItemListContainer/>
      <ItemCount stockProp={5} />
    </>
  );
}

export default App;
