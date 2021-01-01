import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Checkbox({
  height = '18px',
  width = '18px',
  checked,
  onChange,
  label,
  disabled,
}) {
  const [hovered, setHovered] = useState(false);
  const style = {
    height,
    width,
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '0.4em',
    cursor: 'pointer',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#cccccc',
    boxSizing: 'border-box',
  };
  if (checked) {
    style.backgroundColor = '#1ab394';
  } else if (disabled) {
    style.borderColor = '#e6e6e6';
  } else if (hovered) {
    style.borderWidth = '2px';
    style.borderStyle = 'solid';
    style.borderColor = '#1ab394';
  }

  const checkboxOnChange = (e) => {
    if (disabled) {
      return;
    }
    onChange(e);
  };

  return (
      <label style={{ display: 'flex', height }}>
        <div
          style={style}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <i
            className="fa fa-check"
            style={{
              color: '#FFFFFF',
              display: checked ? 'inline-block' : 'none',
              verticalAlign: 'middle',
            }}
            aria-hidden="true"
          />
        </div>
        <span style={{
          color: disabled ? '#ccc' : 'inherit',
          display: 'inline-flex',
          height: '100%',
          verticalAlign: 'top',
          alignItems: 'center',
        }}>{label}</span>
        <input
          style={{ display: 'none' }}
          type="checkbox"
          checked={checked}
          onChange={checkboxOnChange}
        />
      </label>
  );
}

export default Checkbox;
