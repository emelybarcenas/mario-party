import {useParams} from 'react-router-dom'
import { supabase } from '../supabase';
import { useState, useEffect } from 'react';
export default function Updated() {
    
    const {id} = useParams();
    const [character,setCharacter] = useState(null)
    const [loading,setLoading] = useState(true)

    const characterImages = {
        Mario: "/mario.png",
        Luigi: "/luigi.png",
        Peach: "/peach.png",
        Bowser: "/bowser.png",
        Yoshi: "/yoshi.png",
        Toad: "/toad.png", 
}



    useEffect(()=>{
        const fetchCharacter = async () =>{
            const {data,error} = await supabase
            .from('Characters')
            .select('*')
            .eq('id', id)
            .single()

            if (error){
                console.error('error fetching datat')
            }
            else{
                setCharacter(data)
            }
            setLoading(false)
        }
        fetchCharacter()
    }, [id])

    const imageSrc = character ? characterImages[character.character_type]: "";

    if (loading) return <p>Loading...</p>
    if (!character) return <p>Character not found</p>
    return (

        <div className="p-6">
            <img src={imageSrc} className='w-100'/>
            <h1 className="text-2xl font-bold mb-4">Current Info:</h1>
      <h1>Name: {character.name}</h1>
      <p>Character Type: {character.character_type}</p>
      {/* You can now build a form here pre-filled with `character.name`, etc. */}
    </div>
        
    )
}