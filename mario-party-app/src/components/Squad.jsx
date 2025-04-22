import CharacterCard from "./CharacterCard"
import { supabase } from "../supabase"
import { useState, useEffect } from 'react'

export default function Squad(){

    const [characters, setCharacters] = useState([])

    const fetchCharacters = async () => {
      const { data, error } = await supabase.from('Characters').select('*').order('created_at', {ascending:false})
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
      <>
      <h1 className="font-bold p-10 mt-10 text-2xl">Added Characters:</h1>
        <div className="flex gap-10 flex-wrap justify-center">
            {characters.map((char)=>{
                return(
                <CharacterCard 
                key={char.id}
                id={char.id}
                name={char.name}
                characterType={char.character_type}
                
                />
                )
            })}
        </div>
      </>
    )
}