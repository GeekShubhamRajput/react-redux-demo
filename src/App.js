import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import store from './redux/store'
import CakeContainer from './components/CakeContainer'
import NewCakeContainer from './components/NewCakeContainer'
import HooksCakeContainer from './components/HooksCakeContainer'
import IceCreamContainer from './components/IceCreamContainer'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
