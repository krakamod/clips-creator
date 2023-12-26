import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');

const bootstrapApplication = async (mainDiv: HTMLElement): Promise<void> => {
  const root = ReactDOM.createRoot(mainDiv);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
};

if (rootElement != null) {
  void bootstrapApplication(rootElement);
}
