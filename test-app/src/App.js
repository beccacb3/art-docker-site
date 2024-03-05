import './scss/main.scss';
import Nav from './Components/Nav.js';
import Experience from './Components/Experience.js';
import Landing from './Components/Landing.js';
import Projects from './Components/Projects.js';
import Contact from './Components/Contact.js';
import ArtWork from './Components/ArtWork.js';
import React  from 'react';


function App() {
  let section_list = ['Experience','Projects','Contact']
  return (
    <div className="App">
      {/*<Nav title="Becca Curry" list={section_list}/>*/}
      <Landing />
      <ArtWork />
      <Contact />
    </div>
  );
}

export default App;
