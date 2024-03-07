import './scss/main.scss';
import Nav from './Sections/Nav.js';
import Experience from './Sections/Experience.js';
import Landing from './Sections/Landing.js';
import Projects from './Sections/Projects.js';
import Contact from './Sections/Contact.js';
import ArtWork from './Sections/ArtWork.js';
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
