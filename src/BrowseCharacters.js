import React from 'react';  
import { Link } from 'react-router-dom';  
  
const BrowseCharacters = () => {  
  // Fetch characters data from API or database  
  const characters = fetchCharactersData();  
  
  return (  
   <ul>  
    {characters.map((character) => (  
      <li key={character.id}>  
       <Link to={`/characters/${character.id}`}>  
        {character.name}  
       </Link>  
      </li>  
    ))}  
   </ul>  
  );  
};  
  
export default BrowseCharacters;