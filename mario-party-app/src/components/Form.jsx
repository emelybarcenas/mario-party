import {useState, useEffect} from 'react'
import { supabase } from '../supabase'


export default function Form() {
   const [name,setName] = useState('')
   const [characterType, setCharacterType] = useState('')
   const [characters, setCharacters] = useState([])

   


   const handleSubmit = async (e) => {
    e.preventDefault()

    const { data, error } = await supabase
      .from('Characters')
      .insert([{ name, character_type: characterType }])

    if (error) {
      console.error('Error adding crewmate:', error.message)
    } else {
      alert('Crewmate added to your squad!')
      setName('')
      setCharacterType('')
      fetchCharacters()
    }
  }

  return (
      <form id="mario-squad-form" onSubmit={handleSubmit}>
        <h2 className='font-bold text-2xl text-red-600 p-5'>Create Your Mario Crewmate</h2>
  
        {/* Name Input */}
        <label htmlFor="crewmateName" className='pb-2'>Name your crewmate:</label><br />
        <input
          type="text"
          id="crewmateName"
          value={name}
          onChange = {(e)=>setName(e.target.value)}
          placeholder="e.g. Speedy Luigi"
          required
          className='border-2 rounded p-2'
        />
  
        <br /><br />
  
        {/* Character Selector */}
        <p>Select a Mario character:</p>
  <div className='flex flex-col gap-2 text-left ml-35'>
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
   
  
        <br />
  
        <button type="submit" className='bg-green-500 rounded p-2 text-white'>Add to Squad</button>
      </form>
    );
  }
  