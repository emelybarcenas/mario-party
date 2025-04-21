import CharacterCard from "./CharacterCard"
import { supabase } from "../supabase"
import { useState, useEffect } from 'react'

export default function Squad(){

    const [characters, setCharacters] = useState([])

    const fetchCharacters = async () => {
      const { data, error } = await supabase.from('Characters').select('*')
      if (error) {
        console.error('Error fetching characters:', error.message)
      } else {
        setCharacters(data)
      }
    }
  
    useEffect(() => {
      fetchCharacters()
    }, [])

    
    return(
        <div>
            {characters.map((char)=>{
                return(
                <CharacterCard 
                key={char.id}
                name={char.name}
                characterType={char.character_type}
                />
                )
            })}
        </div>
    )
}