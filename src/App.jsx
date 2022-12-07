import React from 'react'
import SearchBar from './components/SearchBar'
import fakestore from './fakeapi.json'
import Register from './components/Register';

const App = () => {


  return (
    <div>
      {/* <SearchBar placeholder="search" data={fakestore} /> */}
      <Register/>
    </div>
  );
}

export default App
