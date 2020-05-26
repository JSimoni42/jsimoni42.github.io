import ReactDom from 'react-dom';
import React from 'react';

const appRoot = window.document.createElement('div');
document.body.appendChild(appRoot);

ReactDom.render(
  <div>
    Wenis
  </div>,
  appRoot,
);