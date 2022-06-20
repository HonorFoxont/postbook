import './styles/App.scss';

import Providers from './lib/providers/Providers';
import Router from './router/Router';

function App() {
  return (
    <div className="App">
      <Providers>
        <Router />
      </Providers>
    </div>
  );
}

export default App;
