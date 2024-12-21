import React from 'react';  
import { BrowserRouter, Route, Switch } from 'react-router-dom';  
import Navigation from './components/Navigation';  
import Home from './components/Home';  
import BrowseCharacters from './components/BrowseCharacters';  
import Comics from './components/Comics';  
import CharacterDetails from './components/CharacterDetails';  
import NotFound from './components/NotFound';  
  
const App = () => {  
  return (  
   <BrowserRouter>  
    <Navigation />  
    <Switch>  
      <Route path="/" exact component={Home} />  
      <Route path="/browse-characters" component={BrowseCharacters} />  
      <Route path="/comics" component={Comics} />  
      <Route path="/characters/:characterId" component={CharacterDetails} />  
      <Route component={NotFound} />  
    </Switch>  
   </BrowserRouter>  
  );  
};  
  
export default App;
