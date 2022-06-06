// import React from 'react'
import { createRoot } from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import 'styles/main.css';

import Routes from 'routes'
import TopBar from 'components/topbar';


const App = () => {
  return (
    <div className="App">
      <Router>
        <TopBar />
        <Routes />
      </Router>
    </div>
  )
}

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// ReactDOM.render(<App />, document.getElementById('root'))
createRoot(document.getElementById("root")).render(
  <>
    <App />
  </>
);