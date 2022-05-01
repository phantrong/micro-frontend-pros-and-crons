import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { unregister } from './registerServiceWorker';

window.renderProsAndCrons = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId),
  );
  unregister();
};

window.unmountProsAndCrons = containerId => {
  if (document.getElementById(containerId)) {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
  }
};

if (!document.getElementById('ProsAndCrons-container')) {
  ReactDOM.render(<App />, document.getElementById('root'));
}
