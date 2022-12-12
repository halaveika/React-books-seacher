import React from 'react';
import AppRouter from './components/app-router';
import Footer from './components/footer';
import { StateProvider } from './store/store';

function App() {
  return (
    <div className="App container">
      <StateProvider>
        <AppRouter></AppRouter>
      </StateProvider>
      <Footer></Footer>
    </div>
  );
}

export default App;
