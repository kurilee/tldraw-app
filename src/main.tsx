import React from 'react';
import ReactDOM from 'react-dom/client';
import { Tldraw } from 'tldraw';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div style={{ position: 'fixed', inset: 0 }}>
      <Tldraw />
    </div>
  </React.StrictMode>
);
