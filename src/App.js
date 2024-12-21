import React from 'react';  
import { BrowserRouter, Route, Routes } from 'react-router-dom';  
import Home from './components/Home';  
import BrowseCharacters from './components/BrowseCharacters';  
import CharacterDetails from './components/CharacterDetails';  
import Comics from './components/Comics';  
  
function App() {  
  return (  
   <BrowserRouter>  
    <Routes>  
      <Route path="/" element={<Home />} />  
      <Route path="/browse-characters" element={<BrowseCharacters />} />  
      <Route path="/character-details/:id" element={<CharacterDetails />} />  
      <Route path="/comics" element={<Comics />} />  
    </Routes>  
   </BrowserRouter>  
  );  
}  
  
export default App;