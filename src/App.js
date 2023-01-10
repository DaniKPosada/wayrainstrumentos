import { Fragment } from 'react';
import Vista1 from './components/Vista1.js';
import Vista3 from './components/Vista3.js';
function App() {
  return (
    <Fragment>
      <div className="Vista1">
        <Vista1  />
      </div>
      <div className="Vista3">
        <Vista3  />
      </div>
    </Fragment>

  );
}

export default App;
