import React from 'react';
import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';
import ShoppingCart from './ShoppingCart';

export default function App() {
  return (
    <div className="app">
      <header className="app-header">
        <NavBar />
      </header>
      <main>
        <ItemListContainer />
      </main>
      <aside>
        <ShoppingCart />
      </aside>
    </div>
  );
}
