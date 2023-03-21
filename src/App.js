
import './App.css';

import { store } from './store/store';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import Chat from './pages/chat';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Chat />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
