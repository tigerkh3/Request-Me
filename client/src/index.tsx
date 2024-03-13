import React from 'react';
import { createRoot } from 'react-dom/client';
// import App from './components/app.ts';

const container = document.getElementById('root') as Element;
const root = createRoot(container);
root.render(<h1> test </h1>);
