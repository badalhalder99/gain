import React from 'react';
import './style.css';
import Header from './components/Header';
import SortTable from './components/SortTable';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <SortTable />
    </Provider>
  );
};
export default App;
