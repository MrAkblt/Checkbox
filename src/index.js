import React, { useState } from 'react';
import { render } from 'react-dom';
import Checkbox from './Checkbox';

function App() {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      label="test"
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  );
}

render(<App />, document.getElementById('container'));
