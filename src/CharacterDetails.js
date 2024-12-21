import React from 'react';  
import { useParams } from 'react-router-dom';  
  
const CharacterDetails = () => {  
  const { characterId } = useParams();  
  
  // Fetch character data from API or database using the characterId  
  const character = fetchCharacterData(characterId);  
  
  return (  
   <div>  
    <h1>{character.name}</h1>  
    <p>{character.description}</p>  
   </div>  
  );  
};  
  
export default CharacterDetails;