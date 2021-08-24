import React from 'react';
import ReactDOM from 'react-dom';

const Portal = ({ children }) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(children, document.getElementById('modal-root'))}
    </React.Fragment>
  );
};

export default Portal;
