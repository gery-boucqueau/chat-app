import React from 'react';
import { Contact } from './components/Contact';
import './components/Contact.css';
import {keith, jill, brittany} from "./character"

function App() {
  return (
    <div>
      <Contact {...jill} />
      <Contact {...keith}/>
      <Contact {...brittany}/>
    </div>
  );
}

export default App;
