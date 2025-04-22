import {useParams} from 'react-router-dom'
import { supabase } from '../supabase';
import { useState, useEffect } from 'react';
export default function Updated() {
    
    const {id} = useParams();
    const [name, setName] = useState('')
    const [characterType, setCharacterType] = useState('')
    const [character,setCharacter] = useState(null)
    const [loading,setLoading] = useState(true)
    const [message, setMessage] = useState('')
    const [showModal, setShowModal] = useState(false)

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
    useEffect(() => {
        if (character) {
          setName(character.name);
          setCharacterType(character.character_type);
        }
      }, [character]);

      
    const handleSubmit = async (e) =>{
        e.preventDefault()

        const {data, error} = await supabase
        .from('Characters')
        .update({character_type: characterType, name: name})
        .eq('id', id)

        if (error){
            setMessage(`Error: ${error.message}`)
            alert(`Error updating character: ${error.message}`)
        } else {
            setMessage(`Character updated successfully!`)
            alert('Character updated successfully')
        }
        const { data: updatedData, error: fetchError } = await supabase
      .from('Characters')
      .select('*')
      .eq('id', id)
      .single()

    if (!fetchError) {
      setCharacter(updatedData)
    }
    }
    const handleDelete = async (e) => {
       

        const {data, error} = await supabase
        .from('Characters')
        .delete({character_type: characterType, name: name})
        .eq('id', id)

        if (error){
            alert("Error deleting character")
        } else {
            alert("Character deleted succesfully!")
            setCharacter(null)
        }

    }

    if (loading) return <p>Loading...</p>
    if (!character) return <p>Character not found</p>
   
  

    return (

        <div className="p-6">
            <img src={imageSrc} className='w-100 mb-[-50px]'/>
            <h1 className="text-2xl font-bold mb-4">Current Info:</h1>
      <h1>Name: {character.name}</h1>
      <p>Character Type: {character.character_type}</p>
      {/* You can now build a form here pre-filled with `character.name`, etc. */}
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            className="border rounded px-3 py-1 "
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='flex flex-col'>
        <p>Character Type: </p>
        {['Mario', 'Luigi', 'Peach', 'Bowser', 'Yoshi', 'Toad'].map((char) => (
       <label key={char} >
          <input
            type="radio"
            name="characterType"
            value={char}
            checked={characterType === char}
            onChange={(e) => setCharacterType(e.target.value)}
            style={{ marginRight: '0.5rem' }}
            required
            
     
          />
          {char}
        </label>
      ))}
        </div>
        <div className='flex gap-3 justify-center'>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
        >
          Save Changes
        </button>
        <button type="button" className="bg-red-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded" onClick={()=>setShowModal(true)}>
            Delete Character
        </button>
        </div>
      </form>

{showModal && (
    <div className='fixed inset-0 bg-white border-2 border-gray-400 rounded-3xl flex flex-col items-center justify-center p-10'>
<h1>Are you sure you want to delete this character?</h1>
<div className='flex flex-row gap-3 m-10'>
<button onClick={()=>setShowModal(false)} className='bg-white text-black border-2 border-black px-4 py-2 rounded'>Cancel</button>
    <button onClick={async () =>{
        await handleDelete()
        setShowModal(false)
    }}
    className='bg-red-600 text-white px-4 py-2 rounded'
    >Yes, Delete</button>

    
</div>
    </div>
)}

   </div>
        
    )
}