
import './App.css';
import { Provider } from 'react-redux';
import store from './reduxContainer/Store';
import BookContainer from './BookContainer';

function App() {


  return (
    <Provider store={store}>

      <div>
        <BookContainer/>
        
      </div>
    </Provider>

  );
}

export default App;
